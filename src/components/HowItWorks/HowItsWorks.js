import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';
import './HowItsWorks.css';
import {FaUser} from 'react-icons/fa'

const HowItsWorks = () => {
    const [texts, setTexts] = useState([]);
    useEffect(() => {
        fetch('howItsWorks.json')
        .then(res => res.json())
        .then(data => setTexts(data))
    },[])
    return (
        <div className='works-wrapper'>
            <h1 className='how-works-text'>HOW IT WORKS</h1>
            <div className='works-container'>
                {
                    texts.map(text => <Work text={text} key={ text.id}><FaUser /></Work>)
                }
            </div>
        </div>
    );
};

export default HowItsWorks;