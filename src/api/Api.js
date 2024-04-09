import {v4 as uuid} from "uuid"

const fetch = require("node-fetch");

const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@';


export const getRate = async (date, base, out) => {
    const url = `${BASE_URL}${date}/v1/currencies/${base}.json`
    const response = await fetch(url);
    if (response.ok) {
        const text = await response.text();
        const json = JSON.parse(text);
        return {
            id: uuid(),
            date: json['date'],
            value: roundToDecimal(json[base][out])
        }
    }
};

export const getLast30DaysDates = (date) => {
    const copyDate = new Date(date);
    const dates = new Array(30);
    for (let i = 30; i >= 0; i--) {
        dates[i] = copyDate.toISOString().slice(0, 10);
        copyDate.setDate(copyDate.getDate() - 1);
    }
    return dates;
}

export const getLast30DaysRates = async (date, base, out) => {
    const dates = getLast30DaysDates(date);
    return await Promise.all(dates.map(d => getRate(d, base, out)));
}

export const getCurrencyCodes = async () => {
    const url = `${BASE_URL}latest/v1/currencies.json`;
    const response = await fetch(url);
    const currencies = [];
    if (response.ok) {
        const text = await response.text();
        const json = JSON.parse(text);
        for (let symbol in json) {
            const entry = {
                id: uuid(),
                code: symbol,
                description: json[symbol]
            }
            currencies.push(entry);
        }
    }
    return currencies;
}

export const roundToDecimal = (num) => {
    return Math.round(num * 1000) / 1000;
};

export const formatCurrentDate = (date = new Date()) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}