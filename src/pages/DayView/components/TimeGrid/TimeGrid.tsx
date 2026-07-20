import "./TimeGrid.css";

import TimeAxis from "./components/TimeAxis/TimeAxis";
import DayColumn from "./components/DayColumn/DayColumn";


type Props = {
    date: Date;
};


function TimeGrid({
    date
}: Props) {


    return (

        <div className="time-grid">

            <TimeAxis />


            <DayColumn
                date={date}
            />


        </div>

    );

}


export default TimeGrid;