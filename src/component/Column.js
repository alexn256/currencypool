
export const Column = ({value}) => {
    const style = {height: `${value}px`}
    return (
        <div className="column" style={style}>
            <small>{value}</small>
        </div>
    );
}