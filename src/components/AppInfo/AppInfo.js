import React from 'react';
import './AppInfo.css';

const AppInfo = () => {
    return (
        <div className='app-info-wrapper'>
            <div className='app-downloads'>
                <h2>App Download</h2>
                <h1>18560</h1>
            </div>
            <div className='web-users'>
                <h2>Total Web Users</h2>
                <h1>22589</h1>
            </div>
            <div className='providers'>
                <h2>Verified Work Providers</h2>
                <h1>2114</h1>
            </div>
        </div>
    );
};

export default AppInfo;