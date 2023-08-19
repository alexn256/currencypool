
export const RateCard = ({ data }) => {
    const { prev, curr, base, out } = data;

    const isUp = prev < curr;
    const style = isUp ? 'up' : 'down';
    const value = isUp ? '▲' : '▼';

    return (
        <div className='rate-card'>
            <h1 className="rate-value">
                {curr}
                <span className={style}>{value}</span>
            </h1>
            <small>{base.code}/{out.code}</small>
        </div>
    );
}