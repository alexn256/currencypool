import {currencyCodes} from "../currencies.js";

export const CurrencySelector = () => {
    return (
        <div id="head">
            <h1>
                <img src="/money.png" alt="logo"/>
                <span id="title">CurrencyPool</span>
                <img src="/money.png" alt="logo"/>
                <select id="currencies">
                    {currencyCodes.map((code) => <option value={code.toLocaleLowerCase()}>{code}</option>)}
                </select>
            </h1>
        </div>
    );
}

