import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="work-platform container">
                <h1 className="title">Welcome To Online Work Platform</h1>
                <div className="list-texts">
                    <li>Different Type Of Work For Home.</li>
                    <li>No Any Extra Qualifications For Get Job From Here.</li>
                    <li>Just Perform Your Work And Get Benefits.</li>
                    <li>Part Time Work With Zeemoo At Every Location.</li>
                    <li>Done Your Tasks In Website Or Android App Both.</li>
                    <li>Easy Paid Tasks And Task Tracking For Your Work.</li>
                    <li>Extra Just by Doing Task On Zeemoo.</li>
                </div>
            </div>

            <div className="login-form">
                <LoginForm />
            </div>
        </div>
    );
};

export default Home;