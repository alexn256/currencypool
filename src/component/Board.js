import {Column} from "./Column";


export const Board = ({data}) => {
    const values =  getBoardData(data);
    return (
        <div className="row-wrapper">
            <div className="board">{values.map(data => <Column key={data.id} columnData={data}/>)}</div>
        </div>
    );
}

const getBoardData = (data) => {
    const values = data.map(entry => Math.floor(entry.value * 100) / 100);
    const min = Math.min(...values);
    const maxDiff = Math.max(...values) - min;
    return data.map((entry, index) => {
        const rate = values[index];
        return {
            date: new Date(entry.date),
            height: (((entry.value - min) / maxDiff) * 100).toFixed(2),
            rate: rate,
            min: rate === min,
            max: rate === min + maxDiff
        };
    });
}