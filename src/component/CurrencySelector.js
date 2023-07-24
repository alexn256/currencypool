import {getCurrencyCodes} from "../api/Api";
import {useState} from "react";

const codes = await getCurrencyCodes();


export const CurrencySelector = () => {

    const [selected, setSelected] = useState('UAH');

    const handleChange = event => {
        console.log('Label 👉️', event.target.selectedOptions[0].label);
        console.log(event.target.value);
        setSelected(event.target.value);
    };

    return (
        <div id="head">
            <h1>
                <img src="/money.png" alt="logo"/>
                <span id="title">CurrencyPool</span>
                <img src="/money.png" alt="logo"/>
                <select value={selected} onChange={handleChange} id="currencies">{createOptions(codes)}</select>
            </h1>
        </div>
    );
}

const createOptions = (currencyCodes) => {
    const options = [];
    for (let key of currencyCodes) {
        options.push(<option key={key.code} value={key.code}>{key.code.toUpperCase()}</option>);
    }
    return options;
}
