import {getCurrencyCodes} from "../api/Api";

const codes = await getCurrencyCodes();


export const Selector = ({ selected, setCurr }) => {
    const getCurrency = (e) => {
        const selectedOption = e.target[e.target.selectedIndex];
        const code = selectedOption.textContent;
        const description = selectedOption.getAttribute('desc');
        setCurr({ code: code.toLowerCase(), description });
    }

    const renderOptions = (codes) => {
        return codes.map(({ id, code, description }) => (
            <option key={id} desc={description} value={code.toUpperCase()}>
                {code.toUpperCase()}
            </option>
        ));
    }

    return (
        <div className="selector">
            <div>
                <label htmlFor="currency">
                    <select onChange={getCurrency} defaultValue={selected} id="currencies">{renderOptions(codes)}</select>
                </label>
            </div>
            <input step="any" id="currency" type='number' min={0} placeholder="0.00" />
        </div>
    );
}