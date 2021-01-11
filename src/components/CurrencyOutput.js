import React from 'react';

const CurrencyOutput = (props) => {

    const {
        outputAmount,
    } = props;

    return (

        <input
            className='amount-convert-after-inp'
            value={outputAmount}
            type='text'
            placeholder='PLN po przeliczeniu'
            readOnly
        />
    );

};

export default CurrencyOutput;
