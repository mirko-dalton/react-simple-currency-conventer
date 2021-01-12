import React from 'react';

const CurrencyOutput = (props) => {

    return (
        <input
            className='amount-convert-after-inp'
            value={props.outputAmount}
            type='text'
            placeholder='PLN po przeliczeniu'
            readOnly
        />
    );

};

export default CurrencyOutput;
