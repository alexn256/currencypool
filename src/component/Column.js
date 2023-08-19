export const Column = ({columnData}) => {
    const height = columnData.height;
    const style = {
        'height': `calc(${height}% + 20px)`
    }
    const date = columnData.date;
    const classes = columnData.max ? 'max-value' : columnData.min ? 'min-value' : 'base-value';
    const month = date.getMonth() + 1;
    return (
        <div className="column">
            <div className="column-date">
                <div>{date.getFullYear()}</div>
                <div>{date.getDate() + '/' + ( month > 9 ? month : '0' + month)}</div>
            </div>
            <div className="column-value" style={style}>
                <div className={classes} >
                    <span className="column-rate">{columnData.rate}</span>
                </div>
            </div>
        </div>
    );
}