import React, { useEffect, useState } from 'react';
import CurrencyHeader from './components/CurrencyHeader';
import CurrencyInfo from './components/CurrencyInfo';
import CurrencySelect from './components/CurrencySelect';
import CurrencyInputField from './components/CurrencyInput';
import CurrencyOutput from './components/CurrencyOutput';
import Footer from './components/Footer';
import './App.css';

const API_URL = 'https://api.nbp.pl/api/exchangerates/rates/a/';

const App = () => {

    const [currency, setCurrency] = useState('EUR');
    const [currencyDate, setCurrencyDate] = useState(0);
    const [currencyAmount, setCurrencyAmount] = useState(0);
    const [inputAmount, setInputAmount] = useState(0);

    const amountAfterConvert = (currencyAmount * inputAmount).toFixed(2) + ' PLN';

    useEffect(() => {

        fetch(API_URL + currency)
            .then(resp => resp.json())
            .then(resp => {
                setCurrencyAmount(resp.rates[0].mid);
                setCurrencyDate(resp.rates[0].effectiveDate);
            })
            .catch(error => error + alert('Błąd podczas pobierania danych'));
    }, [currency]);

    return (
        <>
            <div className='container'>
                <main>
                    <CurrencyHeader />
                    <CurrencyInfo
                        currencyData={currencyDate}
                        currencyInfo={currency}
                        currencyAmount={currencyAmount}
                    />
                    <div className='container-title'>
                        <CurrencyInputField
                            inputChange={(e) => setInputAmount(e.target.value)}
                        />
                        <CurrencySelect
                            selectClick={(e) => setCurrency(e.target.value)}
                        />
                        <span className='no-name-span'>TO</span>
                        <CurrencyOutput
                            outputAmount={amountAfterConvert}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );

};

export default App;