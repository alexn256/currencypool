import {Selector} from "./Selector";
import {RateCard} from "./RateCard";

export const SelectPanel = ({data}) => {
    return (
        <div className="row-wrapper">
            <div className="select-panel">
                <Selector selected={data.base}/>
                <RateCard data={data}/>
                <Selector selected={data.out}/>
            </div>
        </div>
    );
}