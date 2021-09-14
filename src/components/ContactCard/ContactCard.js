import React, {useState} from 'react';
import './ContactCard.scss';
import {Link} from "react-router-dom";
import user from '../../images/user.png';
import DeleteModal from "../DeleteModal/DeleteModal";
import edit from '../../images/edit.png';

const ContactCard = (props) => {
    const {id, name, email} = props?.contact;

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <div className='contact-container'>
            <div className='item'>
                <div className='contact'>
                    <img className='user-image' src={user} alt="user"/>
                    <div className='contact-content'>
                        <Link className='link' to={{pathname: '/contact/${id}', state: {contact: props.contact}}}>
                            <div className='contact-header'>{name}</div>
                            <div className='contact-email'>{email}</div>
                        </Link>
                    </div>
                </div>
                <div className='edit-delete'>
                    <Link className='link' to={{pathname: '/edit', state: {contact: props.contact}}}>
                        <div className='edit-contact'/>
                    </Link>
                    <div className='delete-contact' onClick={() => toggle()}/>
                    <DeleteModal
                        modal={modal}
                        setModal={setModal}
                        toggle={toggle}
                        deleteContact={props.clickHandler}
                        id={id}
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactCard;