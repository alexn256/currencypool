import {getCurrencyCodes} from "../api/Api";

const codes = await getCurrencyCodes();


export const Selector = () => {
    return (
        <div className="selector">
            <div>
                <label htmlFor="currency">
                    <select id="currencies">{ codes.map(entry => <option key={entry.code} value={entry.code}>{entry.code.toUpperCase()}</option>) }</select>
                </label>
            </div>
            <input id="currency" type="text"/>
        </div>
    );
}
