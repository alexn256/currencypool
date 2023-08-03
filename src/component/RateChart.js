import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {getLast30DaysRates} from "../api/Api";

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Ukrainian hryvnia to the United state dollar for the last 30 days',
        },
    },
};

const last30DaysRates = await getLast30DaysRates(new Date(), 'usd', 'uah');

const RateChart = ({code}) => {
    const labels = last30DaysRates.map(entry => entry.date);
    const values = last30DaysRates.map(entry => entry.value);
    const data = {
        labels: labels,
        datasets: [
            {
                label: code,
                fill: true,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                data: values,
            },
        ],
    };
    return (
        <div id="chart">
            <Line options={options} data={data} />
        </div>
    );
};

export default RateChart;