import {Column} from "./Column";


export const Board = ({data}) => {
    const values =  getBoardData(data);
    return (
        <div className="row-wrapper">
            <div className="board">
                {values.map((entry, index) => <Column key={index} rate={entry.rate} height={entry.height} date={entry.date} /> )}
            </div>
        </div>
    );
}

const getBoardData = (data) => {
    const min = Math.min(...data.map(entry => entry.value));
    const maxDiff = Math.max(...data.map(entry => entry.value - min));
    return data.map(entry => ({
        date: new Date(entry.date),
        height: (((entry.value - min) / maxDiff) * 100).toFixed(2),
        rate: entry.value.toFixed(2)
    }));
}