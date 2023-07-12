
import React from "react";

export const DateSelector = () => {
    return (
        <div>
            <button>«</button>
            <select>
                <option value="2023-07-04">2023-07-04 Tu</option>
               
                <option value="2023-07-05">2023-07-05 We</option>
               
                <option value="2023-07-06">2023-07-06 Th</option>
               
                <option value="2023-07-07">2023-07-07 Fr</option>
               
                <option value="2023-07-08">2023-07-08 Sa</option>
               
                <option value="2023-07-09">2023-07-09 Su</option>
               
                <option value="2023-07-10" selected="">2023-07-10 Mo</option>
               
                <option value="2023-07-11">2023-07-11 Tu</option>
               
            </select>
            <button>»</button>
        </div>
    );
};
