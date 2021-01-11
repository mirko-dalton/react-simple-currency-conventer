import React from 'react';
import { includes } from 'lodash';

const keyblock = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '-', '+', '´', '`', '!', '"', '<', '>', '#', 'ß', '…', '^', '§', '$', '%', '&', '/', '(', ')', '=', '?', ';', ':', '_', '¿', '*',
    '}', '{', '|', ']', '[', '¢', '¶', '“', '¡', '°', 'ü', 'ä', 'æ', 'œ', '±', '•', '∆', ' ', '≤', 'Ä', 'Ü', 'Ö', 'ö', '•',
];

const CurrencyInput = (props) => {
    
    const {
        inputChange,
        amount,
    } = props;

    return (

        <input
            className="amount-convert-before-inp"
            value={amount}
            onInput={inputChange}
            placeholder='suma do przeliczenia'
            type='number'
            min='0'
            step='0.01'
            onKeyDown={(e) => {
                if (includes(keyblock, e.key)) {
                    e.preventDefault();
                }
            }}
        />
    );

};

export default CurrencyInput;
