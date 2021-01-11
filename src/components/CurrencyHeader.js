import React from 'react';
import logo from '../assets/nbp.png';

const CurrencyHeader = () => {

    return (
        <div className='title'>
            <img className='logo' src={logo} alt='nbp' width='80vh' />
            <h1>PRZELICZNIK WALUT</h1>
        </div>
    );

};

export default CurrencyHeader;