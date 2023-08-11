import {useState} from "react";

export const DateRange = () => {
    const [currentDate, setDate] = useState(formatCurrentDate);
    const startDate = "2022-01-01";
    const changeDate = (e) => {
        const selectedDate = e.target.value;
        const date = formatCurrentDate(new Date(selectedDate));
        setDate(date);
    };
    return (
        <div className="row-wrapper">
            <div className="range">
                <input onChange={changeDate} type="date" id="date"  min={startDate} max={currentDate} value={currentDate} name="date"/>
                <h4>You can choose date between <span>{startDate}</span> and <span>{currentDate}</span></h4>
            </div>
        </div>
    );
}

const formatCurrentDate = (date = new Date()) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return`${year}-${month}-${day}`;
}