import {Column} from "./Column";


export const Board = ({rates}) => {
    const values =  getBoardData(rates);
    return (
        <div className="row-wrapper">
            <div className="board">{values.map(data => <Column key={data.id} columnData={data}/>)}</div>
        </div>
    );
}

const getBoardData = (rates) => {
    const values = rates.map(entry => Math.floor(entry.value * 100) / 100);
    const min = Math.min(...values);
    const maxDiff = Math.max(...values) - min;
    return rates.map((entry, index) => {
        const rate = values[index];
        return {
            id: entry.id,
            date: new Date(entry.date),
            height: (((entry.value - min) / maxDiff) * 100).toFixed(2),
            rate: rate,
            min: rate === min,
            max: rate === min + maxDiff
        };
    });
}