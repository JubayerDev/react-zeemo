import React from 'react';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className='login-wrapper'>
            <h2 className='login-title'>Login Account</h2>
            <div className="input-title">
                <FaEnvelope /><p>Email Id</p>
            </div>
            <input type="email" placeholder='Enter Email' />
            <div className="input-title">
                <FaLock /><p>Password</p>
            </div>
            <input type="password" placeholder='Enter Your Password' />
            <button className='login-form-btn'>Login</button>
            <span className="signup-text">
                Not a member yet? <Link to='/signup'>Sign Up</Link>
            </span>
        </div>
    );
};

export default LoginForm;