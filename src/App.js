import './App.css';

import {Footer} from "./component/Footer.js";
import {Header} from "./component/Header";
import {SelectPanel} from "./component/SelectPanel";
import {Board} from "./component/Board";
import {getLast30DaysRates} from "./api/Api";
import {Legend} from "./component/Legend";
import {DateRange} from "./component/DateRange";

const last30DaysRates = await getLast30DaysRates(new Date(), 'usd', 'uah');
function App() {

    const data = {base: 'USD', out: 'UAH', prev: last30DaysRates[last30DaysRates.length - 2].value, curr: last30DaysRates[last30DaysRates.length - 1].value};
    return (
        <div>
            <Header/>
            <main className="main">
                <SelectPanel data={data}/>
                <Board data={last30DaysRates}/>
                <Legend/>
                <DateRange/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;