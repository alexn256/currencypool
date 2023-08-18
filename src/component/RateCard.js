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
    
    return (
        <div className='rate-card'>
            <h1 className="rate-value">
                {Math.floor(data.curr * 100) / 100}
                <span className={style}>{value}</span>
            </h1>
            <small>{data.base.code}/{data.out.code}</small>
        </div>
    );
}