export const Column = ({rate, height, date}) => {
    const style = {
        height: `calc(${height}% + 20px)`,
    }
    return (
        <div className="column">
            <div className="column-date">
                <div>{date.getFullYear()}</div>
                <div>{date.getDate() + '/' + date.getMonth()}</div>
            </div>
            <div className="column-value" style={style}>
                <div className="value" >
                    <small>{rate}</small>
                </div>
            </div>
        </div>
    );
}