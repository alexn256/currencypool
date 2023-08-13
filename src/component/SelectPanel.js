import {Selector} from "./Selector";
import {RateCard} from "./RateCard";
import {getLast30DaysRates} from "../api/Api";

export const SelectPanel = ({stateObj, updateObj}) => {

    const setBase = async (baseCurr) => {
        const last30DaysRates = await getLast30DaysRates(stateObj.date, baseCurr, stateObj.out);
        updateObj((obj) => {
            const newObj = {...obj,
                base: baseCurr,
                prev: last30DaysRates[last30DaysRates.length - 2].value,
                curr: last30DaysRates[last30DaysRates.length - 1].value,
                rates: last30DaysRates,
            };
            console.log(newObj);
            return newObj;
        });
    }
    const setOut = (outCurr) => {
        updateObj((obj) => {
            return {...obj, out: outCurr }
        });
    }

    return (
        <div className="row-wrapper">
            <div className="select-panel">
                <Selector selected={stateObj.base.toUpperCase()} setCurr={setBase}/>
                <RateCard data={stateObj}/>
                <Selector selected={stateObj.out.toUpperCase()} setCurr={setOut}/>
            </div>
        </div>
    );
}