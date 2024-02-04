import './App.css';

import {Footer} from "./component/Footer.js";
import {Header} from "./component/Header";
import {SelectPanel} from "./component/SelectPanel";
import {Board} from "./component/Board";
import {getLast30DaysRates, roundToDecimal} from "./api/Api";
import {Legend} from "./component/Legend";
import {DateRange} from "./component/DateRange";
import {useEffect, useState} from "react";
import {CurrencyDescriptor} from "./component/CurrencyDescriptor";

function App() {

    const [baseVal, setBaseVal] = useState(0.00);
    const [outVal, setOutVal] = useState(0.00);

    const [obj, updateObj] = useState({
        base: {code:'usd', description:'United States Dollar'},
        out: {code:'uah', description:'Ukrainian Hryvnia'},
        prev: 0.00,
        curr: 0.00,
        rates: [],
        date: new Date()
    });

    useEffect(()=> {
        async function fetchData (date, baseCurrency, outCurrency) {
            const rates = await getLast30DaysRates(date, baseCurrency, outCurrency);
            updateObj((oldObj) => {
                return {
                    base: oldObj.base,
                    out: oldObj.out,
                    prev: rates[rates.length - 2].value,
                    curr: rates[rates.length - 1].value,
                    rates: rates,
                    date: oldObj.date
                }
            });
        }
        fetchData(obj.date, obj.base.code, obj.out.code);
    },[]);

    const calcOutValue = (event) => {
        const { value: inputValue } = event.target;
        const { curr: rate } = obj;
        setBaseVal(inputValue);
        setOutVal(roundToDecimal(rate * inputValue));
    };

    const calcBaseValue = (event) => {
        const { value: outputValue } = event.target;
        const { curr: rate } = obj;
        setOutVal(outputValue);
        setBaseVal(roundToDecimal(outputValue / rate));
    };

    return (
        <div>
            <Header/>
            <main className="main">
                <SelectPanel stateObj={obj} updateObj={updateObj} baseVal={baseVal} calcBase={calcBaseValue} outVal={outVal} calcOut={calcOutValue} setOutVal={setOutVal}/>
                <CurrencyDescriptor base={obj.base.description} out={obj.out.description} />
                <Board rates={obj.rates}/>
                <Legend/>
                <DateRange stateObj={obj} updateObj={updateObj} baseVal={baseVal} calcOut={setOutVal}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;