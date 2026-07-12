import TimeSegment from "./components/TimeSegment/TimeSegment";

import "./TimeGrid.css";


function TimeGrid() {


    const segments = Array.from(
        { length: 96 },
        (_, index) => index
    );


    return (

        <div className="time-grid">

            {segments.map(segment => (

                <TimeSegment
                    key={segment}
                    index={segment}
                />

            ))}

        </div>

    );
}


export default TimeGrid;