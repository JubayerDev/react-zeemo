import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div>
            <h2 className='login-title'>Login Account</h2>
            <p>Email Id</p>
            <input type="email" placeholder='Enter Email' />
            <p>Password</p>
            <input type="password" placeholder='Enter Your Password' />
            <button className='login-form-btn'>Login</button>
        </div>
    );
};

export default LoginForm;