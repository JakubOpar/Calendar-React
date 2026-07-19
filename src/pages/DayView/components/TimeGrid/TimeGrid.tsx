import "./TimeGrid.css";

import TimeAxis from "./components/TimeAxis/TimeAxis";
import DayColumn from "./components/DayColumn/DayColumn";


function TimeGrid() {

    return (

        <div className="time-grid">

            <TimeAxis />

            <DayColumn />

        </div>

    );

}


export default TimeGrid;