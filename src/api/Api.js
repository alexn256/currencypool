import {v4 as uuid} from "uuid"

const fetch = require("node-fetch");

const BASE_URL = 'http://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1';

export const getRate = async (date, base, out) => {
    const url = `${BASE_URL}/${date}/currencies/${base}/${out}.json`;
    const response = await fetch(url);
    if (response.ok) {
        const text = await response.text();
        const json = JSON.parse(text);
        return {
            id: uuid(),
            date: json['date'],
            value: json[out]
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
    const url = 'https://api.exchangerate.host/symbols';
    const response = await fetch(url);
    const currencies = [];
    if (response.ok) {
        const text = await response.text();
        const json = JSON.parse(text);
        const symbols = json.symbols;
        for (let symbol in symbols) {
            const entry = {
                id: uuid(),
                code: symbol,
                description: symbols[symbol].description
            }
            currencies.push(entry);
        }
    }
    return currencies;
}

//TODO see https://exchangerate.host/#/#docs