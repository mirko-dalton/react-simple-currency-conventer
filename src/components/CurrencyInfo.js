import React from 'react';

const CurrencyInfo = (props) => {

    return (
        <div className='info-text'>
            <div className='currency-info'>Aktualny kurs {props.currencyInfo} na dzien {props.currencyData} wynosi {props.currencyAmount.toFixed(2)} PLN</div>
        </div>
    );

};

export default CurrencyInfo;