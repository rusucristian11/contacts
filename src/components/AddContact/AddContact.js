import React from "react";
import './AddContact.scss';
import {Route, withRouter} from 'react-router-dom';

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
        this.props.history.push("/");
    }

    render() {
        return (
            <div className='add-contact'>
                <div className='rounded-card form-container'>
                    <div className='form'>
                        <div className='form-title'>Add Contact</div>
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
                        <button className='add-contact' onClick={this.add}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddContact);