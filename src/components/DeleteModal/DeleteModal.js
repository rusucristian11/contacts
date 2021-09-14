import React from "react";
import './DeleteModal.scss';

function DeleteModal(props) {
    return !props.modal ? null : (
        <React.Fragment>
            <div className='delete-card-modal'>
                <div className='rounded-card delete-modal'>
                    <div className='delete-modal-title'>Are you sure that you want to delete this contact?</div>
                    <div className='delete-modal-buttons'>
                        <button className='delete-modal-yes' onClick={() => {props.toggle(); props.deleteContact(props.id)}}>Yes</button>
                        <button className='delete-modal-no' onClick={() => props.toggle()}>No</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DeleteModal;