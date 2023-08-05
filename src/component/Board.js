import {Column} from "./Column";


export const Board = () => {
    let N = 100;  // Replace 100 with your desired maximum value
    let length = 30;
    let randomArray = Array.from({length}, () => Math.floor(Math.random() * N) + 1);
    console.log(randomArray);
    return (
        <div className="row-wrapper">
            <div className="board">
                {randomArray.map((n, index) => <Column key={index} value={n}/> )}
            </div>
        </div>
    );
 }