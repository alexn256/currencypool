
export const RateCard = ({ data }) => {
    const { prev, curr, base, out } = data;

    const isUp = prev < curr;
    const style = isUp ? 'up' : 'down';
    const value = isUp ? '▲' : '▼';

    const displayedValue = Math.floor(curr * 100) / 100;

    return (
        <div className='rate-card'>
            <h1 className="rate-value">
                {displayedValue}
                <span className={style}>{value}</span>
            </h1>
            <small>{base.code}/{out.code}</small>
        </div>
    );
}