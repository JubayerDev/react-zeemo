import React from 'react';
import './Benifit.css';
import { FaUser } from 'react-icons/fa';

const Benifit = ({ benifit }) => {
    const { name, desc } = benifit;
    return (
        <div className='grid-content'>
            <FaUser size={ 28}/>
            <h2>{name}</h2>
            <p>{ desc}</p>
        </div>
    );
};

export default Benifit;