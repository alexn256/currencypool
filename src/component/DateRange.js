import {formatCurrentDate, getLast30DaysRates, roundToDecimal} from "../api/Api";

export const DateRange = ({ stateObj, updateObj, baseVal, calcOut }) => {
    const startDate = "2022-01-01";
    const currentDate = formatCurrentDate();

    const changeDate = async (e) => {
        const selectedDate = new Date(e.target.value);
        const { base, out } = stateObj;
        const rates = await getLast30DaysRates(selectedDate, base.code, out.code);

        const obj = {
            ...stateObj,
            prev: rates[rates.length - 2].value,
            curr: rates[rates.length - 1].value,
            rates,
            date: selectedDate
        };

        updateObj(obj);

        const rate = obj.curr;
        calcOut(roundToDecimal(baseVal * rate));
    };

    return (
        <div className="row-wrapper">
            <div className="range">
                <input
                    onChange={changeDate}
                    type="date"
                    id="date"
                    min={startDate}
                    max={currentDate}
                    value={formatCurrentDate(stateObj.date)}
                    name="date"
                />
                <h4>You can choose a date between <span>{startDate}</span> and <span>{currentDate}</span></h4>
            </div>
        </div>
    );
}