import React from 'react';
import NumberFormat from 'react-number-format';

const CurrencyInput = (props) => {

    return (
        <NumberFormat
            className='amount-convert-before-inp'
            value={props.amount}
            onChange={props.inputChange}
            placeholder='suma do przeliczenia'
            decimalSeparator='.'
            allowedDecimalSeparators=','
        />
    );

};

export default CurrencyInput;
