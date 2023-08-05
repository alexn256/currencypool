import './App.css';

import {Footer} from "./component/Footer.js";
import {Header} from "./component/Header";
import {SelectPanel} from "./component/SelectPanel";
import {Board} from "./component/Board";

function App() {
    return (
        <div>
            <Header/>
            <main className="main">
                <SelectPanel/>
                <Board/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;