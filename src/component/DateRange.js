import {getLast30DaysRates} from "../api/Api";

export const DateRange = ({ stateObj, updateObj }) => {
    const startDate = "2022-01-01";
    const currentDate = formatCurrentDate();

    const changeDate = async (e) => {
        const selectedDate = new Date(e.target.value);
        const { base, out } = stateObj;
        const rates = await getLast30DaysRates(selectedDate, base.code, out.code);

        const updatedObj = {
            ...stateObj,
            prev: rates[rates.length - 2].value,
            curr: rates[rates.length - 1].value,
            rates,
            date: selectedDate
        };

        updateObj(updatedObj);
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

const formatCurrentDate = (date = new Date()) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}