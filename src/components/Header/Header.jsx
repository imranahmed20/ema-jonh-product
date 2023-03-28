import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div >
                <a href="/home">Home</a>
                <a href="/shoe">Shoe</a>
                <a href="/invention">Invention</a>
                <a href="product">Product</a>
            </div>
        </nav>
    );
};

export default Header;