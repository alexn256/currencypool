export const Column = ({columnData}) => {
    const height = columnData.height;
    const style = {
        'height': `calc(${height}% + 20px)`
    }
    const date = columnData.date;
    const classes = columnData.max ? 'max-value' : columnData.min ? 'min-value' : 'base-value';
    return (
        <div className="column">
            <div className="column-date">
                <div>{date.getFullYear()}</div>
                <div>{date.getDate() + '/' + date.getMonth()}</div>
            </div>
            <div className="column-value" style={style}>
                <div className={classes} >
                    <small>{columnData.rate}</small>
                </div>
            </div>
        </div>
    );
}