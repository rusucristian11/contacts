import React, {useState, useRef} from "react";
import './ContactList.scss';
import ContactCard from "../ContactCard/ContactCard";
import {Link} from "react-router-dom";

const ContactList = (props) => {
    const inputEl = useRef("");


    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };


    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}
            />
        );
    });

    return (
        <div className='contact-page'>
            <div className='rounded-card container-contact-list'>
                <div className='contact-list'>
                    <div className='contact-list-title'>
                        Contact List
                        <Link to="/add-contact">
                            <button className="addcontact-button">Add contact</button>
                        </Link>
                    </div>
                    <input
                        ref={inputEl}
                        type="text"
                        placeholder="Search contact"
                        className='prompt'
                        value={props.term}
                        onChange={getSearchTerm}
                        autoFocus
                    />
                    <div className='contact-list-render'>
                        {renderContactList.length > 0
                            ? renderContactList
                            : "No contacts available"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactList;