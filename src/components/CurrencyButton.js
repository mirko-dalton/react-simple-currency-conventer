import React from 'react';

const CurrencyButton = (props) => {

    const {
        buttonClick,
    } = props;

    return (
        <button
            className="click-convert-btn"
            type="submit"
            onClick={buttonClick}>
            Przelicz
        </button>
    );

};

export default CurrencyButton;
