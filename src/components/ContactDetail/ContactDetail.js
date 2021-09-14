import React from 'react';
import './ContactDetail.scss';
import {Link} from "react-router-dom";
import beemo from '../../images/beemo.png';

const ContactDetail = (props) => {
    console.log(props);
    const {name, email} = props.location.state.contact;
    return (
        <div className='contact-details-wrapper'>
            <div className='rounded-card contact-details'>
                <div className='contact-photo'>
                    <img src={beemo} className="profile-photo" alt="beemo"/>
                </div>
                <div className='contact-info'>
                    <div className='contact-name-email'>
                        <div className="contact-name">{name}</div>
                        <div className="contact-email">{email}</div>
                    </div>
                    <Link to="/">
                        <div className="back-button"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;