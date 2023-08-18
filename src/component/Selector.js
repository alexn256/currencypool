import {getCurrencyCodes} from "../api/Api";

const codes = await getCurrencyCodes();


export const Selector = ({selected, setCurr}) => {

    const getCurrency = async (e) => {
        const selected = e.target[e.target.selectedIndex];
        const code = selected.text;
        const description = selected.getAttribute('desc');
        setCurr({code: code.toLowerCase(), description: description});
    }

    return (
        <div className="selector">
            <div>
                <label htmlFor="currency">
                    <select onChange={getCurrency} defaultValue={selected} id="currencies">{
                        codes.map(item => {
                            const code = item.code.toUpperCase();
                            const description =  item.description;
                            return <option key={item.id} desc={description} value={code}>{code}</option>;
                        })
                    }</select>
                </label>
            </div>
            <input step="any" id="currency" type='number' min={0} placeholder="0.00"/>
        </div>
    );
}