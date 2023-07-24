import React from "react";

export const DateSelector = () => {
    return (
        <div id="date-chooser">
            <label htmlFor="start">Choose date</label> <br/>
            <input type="date" min="2022-01-01" max="2023-12-31" name="birthday"></input>
        </div>
    );
};
