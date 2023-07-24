import './App.css';

import {DateSelector} from "./component/DateSelector.js";
import RateChart from "./component/RateChart.js";
import {CurrencySelector} from "./component/CurrencySelector.js";
import {Footer} from "./component/Footer.js";

function App() {
    return (
        <div>
            <CurrencySelector/>
            <RateChart/>
            <DateSelector/>
            <Footer/>
        </div>
    );
}

export default App;