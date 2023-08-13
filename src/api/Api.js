import {v4 as uuid} from "uuid"

const fetch = require("node-fetch");

const BASE_URL = 'http://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1';

export const getRate = async (date, base, out) => {
    const url = `${BASE_URL}/${date}/currencies/${base}/${out}.json`;
    console.log(url);
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

export const getLast30DaysRates = async (date, base, out) => {
    const result = [];
    const dates = getLast30DaysDates(date);
    for (let d of dates) {
        const entry = await getRate(d, base, out);
        result.push(entry);
    }
    return result;
}

export const getLast30DaysDates = (date) => {
    const copyDate = new Date(date);
    const dates = new Array(30);
    for (let i = 30; i >= 0; i--) {
        dates[i] = copyDate.toISOString().slice(0, 10);
        copyDate.setDate(copyDate.getDate() - 1);
    }
    return dates;
}

export const getCurrencyCodes =  async () => {
    const url = `${BASE_URL}/latest/currencies.json`;
    const response = await fetch(url);
    const currencies = [];
    if (response.ok) {
        const text = await response.text();
        const json = JSON.parse(text);
        for (let key in  json) {
            const entry = {
                id: uuid(),
                code: key,
                desc: json[key]
            }
            currencies.push(entry);
        }
    }
    return currencies;
}