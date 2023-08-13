import {useState} from "react";

export const RateCard = ({data}) => {
    const prev = data.prev;
    const curr = data.curr;
    let style = 'up';
    let value = '▲';
    if (prev >= curr) {
        value =  '▼';
        style = 'down';
    }

    const [rate, setRate] = useState(Math.floor(curr * 100) / 100);

    return (
        <div className='rate-card'>
            <h1 className="rate-value">
                {rate}
                <span className={style}>{value}</span>
            </h1>
            <small>{data.base}/{data.out}</small>
        </div>
    );
}