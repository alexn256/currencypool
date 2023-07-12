import logo from './logo.svg';
import './App.css';
import {DateSelector} from "./component/DateSelector.js";
import BarChart from "./component/BarChart.js";
import {CurrencySelector} from "./component/CurrencySelector.js";

function App() {
    return (
        <div>
            <CurrencySelector/>
            <BarChart/>
           <DateSelector/>
        </div>
    );
}

export default App;