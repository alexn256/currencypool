
import {Bar} from "react-chartjs-2";
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);


export const Board = ({rates}) => {
    const values = getBoardData(rates);


    const labels = values.map((item, index) => index);

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
        scales: {
            yAxes: [{
                id: 'A',
                type: 'linear',
                position: 'left',
            }, {
                id: 'B',
                type: 'linear',
                position: 'right',
                ticks: {
                    max: 1,
                    min: 0
                }
            }]
        }
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: values.map((item, index) => item.rate),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return (
        <div className="row-wrapper">
            <div className="board">
                <Bar options={options} data={data} />
            </div>
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