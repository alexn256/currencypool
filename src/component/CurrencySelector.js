import {getCurrencyCodes} from "../api/Api";

const codes = await getCurrencyCodes();


export const CurrencySelector = () => {
    return (
        <div id="head">
            <div>
                <h1>
                    <img src="/money.png" alt="logo"/>
                    <span id="title">CurrencyPool</span>
                    <img src="/money.png" alt="logo"/>
                </h1>
            </div>
            <div>
                <select id="currencies">{ codes.map(entry => <option key={entry.code} value={entry.code}>{entry.code.toUpperCase()}</option>) }</select>
                <span>to</span>
                <select id="currencies">{ codes.map(entry => <option key={entry.code} value={entry.code}>{entry.code.toUpperCase()}</option>) }</select>
            </div>
        </div>
    );
}
