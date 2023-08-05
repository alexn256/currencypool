import RateChart from "./RateChart";
import {Selector} from "./Selector";
import {RateCard} from "./RateCard";

export const SelectPanel = () => {
    return (
        <div className="row-wrapper">
            <div className="select-panel">
                <Selector/>
                <RateCard prev={36.56} curr={36.57}/>
                <Selector/>
            </div>
        </div>
    );
}