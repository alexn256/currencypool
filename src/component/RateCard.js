
export const RateCard = ({ data }) => {
    const { prev, curr, base, out } = data;

    const isUp = prev < curr;
    const style = isUp ? 'up' : 'down';
    const value = isUp ? '▲' : '▼';

    return (
        <div className='rate-card'>
            <div className="rate-value">{curr}<span className={style}>{value}</span></div>
            <small>{base.code.toLowerCase()}/{out.code.toLowerCase()}</small>
        </div>
    );
}