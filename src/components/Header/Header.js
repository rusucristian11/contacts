import React from "react";
import './Header.scss';

const Header = () => {
    return (
        <React.Fragment>
            <header className='header'>
                <a className='header-title' href="/">Contact Manager</a>
            </header>
        </React.Fragment>
    );
}

export default Header;