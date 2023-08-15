import './App.css';

import {Footer} from "./component/Footer.js";
import {Header} from "./component/Header";
import {SelectPanel} from "./component/SelectPanel";
import {Board} from "./component/Board";
import {getLast30DaysRates} from "./api/Api";
import {Legend} from "./component/Legend";
import {DateRange} from "./component/DateRange";
import {useEffect, useState} from "react";

function App() {

    const [obj, updateObj] = useState({
        base: 'usd',
        out: 'uah',
        prev: 0.00,
        curr: 0.00,
        rates: [],
        date: new Date()
    });


    useEffect(()=> {
        console.log('App useEffect');
        async function fetchData (date, baseCurrency, outCurrency) {
            const last30DaysRates = await getLast30DaysRates(date, baseCurrency, outCurrency);
            updateObj((oldObj) => {
                return {
                    base: oldObj.base,
                    out: oldObj.out,
                    prev: last30DaysRates[last30DaysRates.length - 2].value,
                    curr: last30DaysRates[last30DaysRates.length - 1].value,
                    rates: last30DaysRates,
                    date: oldObj.date
                }
            });
        }
        fetchData(obj.date, obj.base, obj.out);
    },[]);

    return (
        <div>
            <Header/>
            <main className="main">
                <SelectPanel stateObj={obj} updateObj={updateObj}/>
                <Board rates={obj.rates}/>
                <Legend/>
                <DateRange stateObj={obj} updateObj={updateObj}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;