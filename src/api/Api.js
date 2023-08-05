const fetch = require("node-fetch")

export const getRate = async (date, base, out) => {
    const url = `http://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${base}/${out}.json`;
    const response = await fetch(url);
    if (response.ok) {
        const text = await response.text();
        const json = JSON.parse(text);
        return {
            date: json['date'],
            value: json[out]
        }
    }
};

export const getLast30DaysRates = async (date, base, out) => {
    const result = [];
    const dates = getLast30DaysDates(date);
    for (let date of dates) {
        const entry = await getRate(date, base, out);
        result.push(entry);
    }
    return result;
}

export const getLast30DaysDates = (date) => {
    const dates = new Array(30);
    for (let i = 30; i >= 0; i--) {
        dates[i] = date.toISOString().slice(0, 10);
        date.setDate(date.getDate() - 1);
    }
    return dates;
}

export const getCurrencyCodes =  async () => {
    const url = `http://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`;
    const response = await fetch(url);
    const currencies = [];
    if (response.ok) {
        const text = await response.text();
        const json = JSON.parse(text);
        for (let key in  json) {
            const entry = {
                code: key,
                desc: json[key]
            }
            currencies.push(entry);
        }
    }
    return currencies;
}