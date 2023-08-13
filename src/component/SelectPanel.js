import {Selector} from "./Selector";
import {RateCard} from "./RateCard";

export const SelectPanel = ({stateObj, updateObj}) => {

    const setBase = (baseCurr) => {
        updateObj((obj) => {
            return {...obj, base: baseCurr }
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