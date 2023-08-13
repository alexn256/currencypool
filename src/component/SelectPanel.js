import {Selector} from "./Selector";
import {RateCard} from "./RateCard";
import {useState} from "react";

export const SelectPanel = ({data}) => {

    const [stateObj, updateStateObj] = useState(data);

    const setBase = (baseCurr) => {
        updateStateObj((obj) => {
            return {...obj, base: baseCurr }
        });
    }
    const setOut = (outCurr) => {
        updateStateObj((obj) => {
            return {...obj, out: outCurr }
        });
    }


    return (
        <div className="row-wrapper">
            <div className="select-panel">
                <Selector selected={stateObj.base} setCurr={setBase}/>
                <RateCard data={stateObj}/>
                <Selector selected={stateObj.out} setCurr={setOut}/>
            </div>
        </div>
    );
}