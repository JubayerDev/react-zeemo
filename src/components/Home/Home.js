import React from 'react';
import AppInfo from '../AppInfo/AppInfo';
import LoginForm from '../LoginForm/LoginForm';
import WorkBenefits from '../WorkBenefits/WorkBenefits';
import Works from '../Works/Works';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className="work-platform container">
                    <h1 className="title">Welcome To Online Work <span>Platform</span></h1>
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
            
            <div className='how-its-works'>
                <Works />
            </div>

            <div className="benifites-container">
                {/* <Benifits /> */}
                <WorkBenefits />
            </div>

            <div className="app-info">
                <AppInfo />
            </div>
        </div>
    );
};

export default Home;