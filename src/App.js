import './App.css';

import {DateSelector} from "./component/DateSelector.js";
import RateChart from "./component/RateChart.js";
import {CurrencySelector} from "./component/CurrencySelector.js";
import {Footer} from "./component/Footer.js";
import {Convertor} from "./component/Convertor";
import {RateCard} from "./component/RateCard";

function App() {
    return (
        <div>
            <CurrencySelector/>
            <RateCard prev={36.56} curr={36.57}/>
            <RateChart code={'USD'}/>
            <DateSelector/>
            <Convertor code={'UAH'}/>
            <Footer/>
        </div>
    );
}

export default App;