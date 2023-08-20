import {Selector} from "./Selector";
import {RateCard} from "./RateCard";
import {getLast30DaysRates, roundToDecimal} from "../api/Api";

export const SelectPanel = ({stateObj, updateObj, baseVal, calcBase, outVal, calcOut, setOutVal}) => {

    const updateState = async (baseCurr, outCurr) => {
        const rates = await getLast30DaysRates(stateObj.date, baseCurr.code, outCurr.code);
        updateObj((obj) => {
            return {
                ...obj,
                base: baseCurr,
                out: outCurr,
                prev: rates[rates.length - 2].value,
                curr: rates[rates.length - 1].value,
                rates: rates,
            };
        });
        const rate = rates[rates.length - 1].value;
        setOutVal(roundToDecimal(rate * baseVal));
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
                <Selector selected={stateObj.base.code} setCurr={setBase} calc={calcOut} inputValue={baseVal}/>
                <RateCard data={stateObj}/>
                <Selector selected={stateObj.out.code} setCurr={setOut} calc={calcBase} inputValue={outVal}/>
            </div>
        </div>
    );
}