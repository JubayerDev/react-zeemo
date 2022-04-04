import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Navbar.css';
import {HiMenuAlt1} from 'react-icons/hi'

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} alt="" />
                </Link>
            </div>

            <div className='nav-items'>
                <Link to='/home'>Home</Link>
                <Link to='/packages'>Packages</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>
                    <button className='login-btn'>Log In</button>
                </Link>
                <HiMenuAlt1 size={25} color={ 'white'}/>
            </div>
        </nav>
    );
};

export default Navbar;