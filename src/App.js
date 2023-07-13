import './App.css';

import {DateSelector} from "./component/DateSelector.js";
import BarChart from "./component/BarChart.js";
import {CurrencySelector} from "./component/CurrencySelector.js";
import {Footer} from "./component/Footer.js";

function App() {
    return (
        <div>
            <CurrencySelector/>
            <BarChart/>
           <DateSelector/>
            <Footer/>
        </div>
    );
}

export default App;