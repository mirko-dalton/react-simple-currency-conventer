import React from 'react';

const CurrencyInfo = (props) => {

    const {
        currencyData,
        currencyInfo,
        currencyAmount,
    } = props;

    return (
        <div className='info-text'>
            <div className='currency-info'>Aktualny kurs {currencyInfo} na dzien {currencyData} wynosi {currencyAmount.toFixed(2)} PLN</div>
        </div>
    );

};

export default CurrencyInfo;