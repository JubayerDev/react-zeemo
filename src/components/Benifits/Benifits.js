import React, { useEffect, useState } from 'react';
import Benifit from '../Benifit/Benifit';
import './Benifits.css';
import Girl from '../../assets/girl.png'

const Benifits = () => {
    const [benifits, setBenifits] = useState([]);
    useEffect(() => {
        fetch('benifits.json')
            .then(res => res.json())
            .then(data => setBenifits(data))
    },[])
    return (
        <div>
            <h1 className='benifit-title'>WORK BENIFIT</h1>
            <div className='container-flex'>
                <div className='benifits-container'>
                    {
                        benifits.map(benifit => <Benifit key={ benifit.id} benifit={ benifit}/>)
                    }
                </div>
                <div className='girl-content'>
                    <img src={Girl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Benifits;