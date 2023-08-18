import './App.css';

import {Footer} from "./component/Footer.js";
import {Header} from "./component/Header";
import {SelectPanel} from "./component/SelectPanel";
import {Board} from "./component/Board";
import {getLast30DaysRates} from "./api/Api";
import {Legend} from "./component/Legend";
import {DateRange} from "./component/DateRange";
import {useEffect, useState} from "react";
import {CurrencyDescriptor} from "./component/CurrencyDescriptor";

function App() {

    const [obj, updateObj] = useState({
        base: {code:'usd', description:'Desc1'},
        out: {code:'uah', description:'Desc1'},
        prev: 0.00,
        curr: 0.00,
        rates: [],
        date: new Date()
    });

    useEffect(()=> {
        async function fetchData (date, baseCurrency, outCurrency) {
            const range = await getLast30DaysRates(date, baseCurrency, outCurrency);
            updateObj((oldObj) => {
                return {
                    base: oldObj.base,
                    out: oldObj.out,
                    prev: range[range.length - 2].value,
                    curr: range[range.length - 1].value,
                    rates: range,
                    date: oldObj.date
                }
            });
        }
        fetchData(obj.date, obj.base.code, obj.out.code);
    },[]);

    return (
        <div>
            <Header/>
            <main className="main">
                <SelectPanel stateObj={obj} updateObj={updateObj}/>
                <CurrencyDescriptor base={obj.base.description} out={obj.out.description} />
                <Board rates={obj.rates}/>
                <Legend/>
                <DateRange stateObj={obj} updateObj={updateObj}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;