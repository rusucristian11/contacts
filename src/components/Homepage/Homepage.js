import React, { useState , useEffect } from 'react';
import './Homepage.scss';
import { uuid } from "uuidv4"
import AddContact from "../AddContact/AddContact";
import ContactList from "../ContactList/ContactList";

function Homepage() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, {id: uuid(), ...contact }]);
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });

        setContacts(newContactList);
    }

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retriveContacts) setContacts(retriveContacts);
        },[]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    },[contacts]);

    return (
        <div className='homepage'>
            <AddContact addContactHendler={addContactHandler}/>
            <ContactList contacts={contacts} getContactId={removeContactHandler}/>
        </div>
    );
}

export default Homepage;