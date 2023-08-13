import {getCurrencyCodes} from "../api/Api";

const codes = await getCurrencyCodes();


export const Selector = ({selected, setCurr}) => {

    const getCurrency = async (e) => {
        const code = e.target.value;
        console.log('setCurr');
        setCurr(code.toLowerCase());
    }

    return (
        <div className="selector">
            <div>
                <label htmlFor="currency">
                    <select onChange={getCurrency} defaultValue={selected} id="currencies">{
                        codes.map(item => {
                            const code = item.code.toUpperCase();
                            return <option key={item.id} value={code}>{code}</option>;
                        })
                    }</select>
                </label>
            </div>
            <input step="any" id="currency" type='number' min={0} placeholder="0.00"/>
        </div>
    );
}