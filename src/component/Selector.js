import {getCurrencyCodes} from "../api/Api";

const codes = await getCurrencyCodes();


export const Selector = ({selected}) => {
    return (
        <div className="selector">
            <div>
                <label htmlFor="currency">
                    <select defaultValue={selected} id="currencies">{
                        codes.map(item => {
                            const code = item.code.toUpperCase();
                            return <option key={item.id} value={code}>{code}</option>;
                        })
                    }</select>
                </label>
            </div>
            <input id="currency" type="text"/>
        </div>
    );
}
