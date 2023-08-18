import {Selector} from "./Selector";
import {RateCard} from "./RateCard";
import {getLast30DaysRates} from "../api/Api";

export const SelectPanel = ({stateObj, updateObj}) => {

    const updateState = async (baseCurr, outCurr) => {
        const last30DaysRates = await getLast30DaysRates(stateObj.date, baseCurr.code, outCurr.code);
        updateObj((obj) => {
            const newObj = {
                ...obj,
                base: baseCurr,
                out: outCurr,
                prev: last30DaysRates[last30DaysRates.length - 2].value,
                curr: last30DaysRates[last30DaysRates.length - 1].value,
                rates: last30DaysRates,
            };
            return newObj;
        });
    }

    const setBase = (baseCurr) => {
        return updateState(baseCurr, stateObj.out);
    }

    const setOut = (outCurr) => {
        return updateState(stateObj.base, outCurr);
    }

    return (
        <div className="row-wrapper">
            <div className="select-panel">
                <Selector selected={'USD'} setCurr={setBase}/>
                <RateCard data={stateObj}/>
                <Selector selected={'UAH'} setCurr={setOut}/>
            </div>
        </div>
    );
}