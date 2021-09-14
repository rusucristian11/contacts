import './App.scss';
import React, { useState , useEffect } from 'react';
import Header from './components/Header/Header';
import api from './api/contacts';
import Homepage from './components/Homepage/Homepage';
import AddContact from './components/AddContact/AddContact';
import ContactList from "./components/ContactList/ContactList";
import {Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {uuid} from "uuidv4";
import EditContact from "./components/EditContact/EditContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";

function App() {

    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    //retrieve contacts
    const retrieveContacts = async () => {
        const response = await api.get("/contacts");
        return response.data;
    };

    const addContactHandler = async (contact) => {
        console.log(contact);
        const request = {
            id: uuid(),
            ...contact
        }

        const response = await api.post("/contacts", request);
        setContacts([...contacts, response.data]);
    };

    const updateContactHandler = async (contact) =>{
        const response = await api.put(`/contacts/${contact.id}`, contact)
        const { id, name, email } = response.data;
        setContacts(contacts.map(contact =>{
            return contact.id === id ? {...response.data} : contact;
        }));
    };

    const removeContactHandler = async (id) => {
        await api.delete(`/contacts/${id}`);
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });

        setContacts(newContactList);
    }

    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm);
        if(searchTerm !== ""){
            const newContactList = contacts.filter((contact) => {
               return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            });
            setSearchResults(newContactList);
        }
        else {
            setSearchResults(contacts);
        }
    };

    useEffect(() => {
        const getAllContacts = async () => {
            const allContacts = await retrieveContacts();
            if(allContacts) setContacts(allContacts);
        };

        getAllContacts();
    },[]);

    useEffect(() => {
        //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

    },[contacts]);


    return (
      <React.Fragment>
          <Router>
              <Route component={Header}/>
              <Switch>
                  <Route
                      exact
                      path="/"
                      component={
                          () => <ContactList contacts={ (searchTerm.length < 1) ? contacts : searchResults }
                                             getContactId={removeContactHandler}
                                             term={searchTerm}
                                             searchKeyword={searchHandler}
                          />}
                  />
                  <Route
                      exact
                      path="/add-contact"
                      component={
                          () => <AddContact
                              addContactHandler={addContactHandler}
                          />}
                  />
                  <Route
                      exact
                      path="/edit"
                      component={
                          () => <EditContact
                              updateContactHandler={updateContactHandler}
                          />}
                  />
                  <Route exact path="/homepage" component={Homepage}/>
                  <Route exact path="/contact/:id" component={ContactDetail}/>

              </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
