import React from 'react';
import { FaUser } from 'react-icons/fa'
import './Work.css';

const Work = ({ text }) => {
    const { name, desc } = text;
    return (
        <div className='card-gid'>
            <FaUser size={ 28}/>
            <h2>{name}</h2>
            <p>{ desc}</p>
        </div>
    );
};

export default Work;