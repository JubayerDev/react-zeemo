import React from 'react';
import Girl from '../../assets/girl.png';
import './WorkBenefits.css';
import location from '../../assets/icons/location-dot-solid.svg'
import clock from '../../assets/icons/circle-check-solid.svg'
import rupee from '../../assets/icons/indian-rupee-sign-solid.svg'
import bag from '../../assets/icons/briefcase-solid.svg'

const WorkBenefits = () => {
    return (
        <div>
            <h1 className='benifit-title'>WORK BENIFIT</h1>
            <div className='container-flex'>
                <div className='benifits-container'>
                    <div className='grid-content'>
                        <div className="icon">
                        <img src={location } alt="" />
                        </div>
                        <h2>Work from anywhere</h2>
                        <p>
                            Register today & start Earning Money. No matter where you work.
                        </p>
                    </div>
                    <div className='grid-content'>
                        <div className="icon">
                        <img src={ clock} alt="" />
                        </div>
                        <h2>Work at Anytime</h2>
                        <p>
                            You can work anytime and from any location.
                        </p>
                    </div>
                    <div className='grid-content'>
                        <div className="icon">
                        <img src={ rupee} alt="" />
                        </div>
                        <h2>Easy Payments</h2>
                        <p>The online payment options are easy, and convenient for users to use.</p>
                    </div>
                    <div className='grid-content'>
                        <div className="icon">
                        <img src={ bag} alt="" />
                        </div>
                        <h2>Instant Work update</h2>
                        <p>You can get an instant update of the work after completing the work.</p>
                    </div>
                </div>
                <div className='girl-content'>
                    <img src={Girl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WorkBenefits;