export const RateCard = ({prev, curr}) => {
    let style = 'up';
    let value = '▲';
    if (prev <= curr) {
        value =  '▼';
        style = 'down';
    }
    return (
        <div className='rate-card'>
            <h1 className="rate-value">
                {curr}
                <span className={style}>{value}</span>
            </h1>
            <small>Usd/Uah</small>
        </div>
    );
}