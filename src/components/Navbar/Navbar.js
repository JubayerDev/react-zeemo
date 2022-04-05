// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo.png';
// import './Navbar.css';
// import {HiMenuAlt1} from 'react-icons/hi'

// const Navbar = () => {
//     return (
//         <nav>
//             <div className='logo'>
//                 <Link to='/'>
//                     <img src={Logo} alt="" />
//                 </Link>
//             </div>

//             <div className='nav-items'>
//                 <Link to='/home'>Home</Link>
//                 <Link to='/packages'>Packages</Link>
//                 <Link to='/signup'>Sign Up</Link>
//                 <Link to='/login'>
//                     <button className='login-btn'>Log In</button>
//                 </Link>
//                 <HiMenuAlt1 size={25} color={ 'white'}/>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Logo from '../../assets/logo.png';

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <Link to="/" className="nav__brand">
                <img src={Logo} alt="" />
            </Link>
            <ul className={active}>
                <li className="nav__item">
                    <Link to="/home" className="nav__link">
                        Home
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/packages" className="nav__link">
                        Packages
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/signup" className="nav__link">
                        Sign Up
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to='/login'>
                        <button className='login-btn'>Log In</button>
                    </Link>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;