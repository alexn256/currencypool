import {getCurrencyCodes} from "../api/Api";

const codes = await getCurrencyCodes();


export const Selector = ({selected}) => {
    return (
        <div className="selector">
            <div>
                <label htmlFor="currency">
                    <select defaultValue={selected} id="currencies">{
                        codes.map(entry => entry.code.toUpperCase()).map(code => <option key={code} value={code}>{code}</option>)
                    }</select>
                </label>
            </div>
            <input id="currency" type="text"/>
        </div>
    );
}
