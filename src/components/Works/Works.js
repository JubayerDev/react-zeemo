import React from 'react';
import check from '../../assets/icons/circle-check-solid.svg';
import file from '../../assets/icons/file-solid.svg';
import user from '../../assets/icons/user-solid.svg';
import './Works.css';

const Map = () => {
    return (
        <div className='works-wrapper'>
            <h1 className='how-works-text'>HOW IT WORKS</h1>
            <div className='works-container'>
                <div className='card-grid'>

                    <div className="icon">
                        <img src={user} alt="" />
                    </div>
                    <h2>Create An Account</h2>
                    <p>
                        You can create an account on it without any entry fees.
                    </p>
                </div>
                <div className='card-grid'>
                    <div className="icon">
                        <img src={file} alt="" />
                    </div>
                    <h2>Select A Work</h2>
                    <p>
                        You can complete the tasks in a day. There is no limit to complete the work.
                    </p>
                </div>
                <div className='card-grid'>
                    <div className='icon'>
                        <img src={check} alt="" />
                    </div>
                    <h2>Complete Work</h2>
                    <p>
                        Just Done The Work And Get Paid Safely.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Map;