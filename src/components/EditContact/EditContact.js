import React from "react";
import './EditContact.scss';
import {Route, withRouter} from 'react-router-dom';

class EditContact extends React.Component {
    constructor(props) {
        super(props)
        const {id, name, email} = props.location.state.contact;
        this.state = {
            id,
            name,
            email,
        };
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({name: "", email: ""});
        this.props.history.push("/");
    }

    render() {
        return (
            <div className='edit-contact'>
                <div className='rounded-card form-container'>
                    <div className='form'>
                        <div className='form-title'>Edit Contact</div>
                        <div className='form-name'>
                            <label className='label-name'>Name</label>
                            <input
                                type="text"
                                className='input-name'
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={(e) => this.setState({name: e.target.value})}/>
                        </div>
                        <div className='form-email'>
                            <label className='label-email'>Email</label>
                            <input
                                type="text"
                                className='input-email'
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                        </div>
                        <button className='add-contact' onClick={this.update}>Update</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(EditContact);