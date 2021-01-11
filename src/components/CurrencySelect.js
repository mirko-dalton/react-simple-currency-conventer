import React from 'react';

const currencyOptions = [

    {
        label: 'EUR',
        value: 'EUR',
    },
    {
        label: 'USD',
        value: 'USD',
    },
    {
        label: 'CHF',
        value: 'CHF',
    },
    {
        label: 'GBP',
        value: 'GBP',
    },
];

const CurrencySelect = (props) => {

    const {
        selectClick,
    } = props;

    return (
        <select className='select-currency-option'
            onChange={selectClick}>
            {currencyOptions.map((option) =>
                <option key={option.value} value={option.value}>{option.label}</option>
            )};
        </select>
    );
    
};

export default CurrencySelect;