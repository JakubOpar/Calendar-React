import HourLabel from "../HourLabel/HourLabel";

import "./TimeAxis.css";


function TimeAxis(){

    const hours = Array.from(
        {length:24},
        (_,i)=>i
    );


    return (

        <div className="time-axis">

            {
                hours.map(hour => (

                    <HourLabel
                        key={hour}
                        hour={hour}
                    />

                ))
            }

        </div>

    );

}


export default TimeAxis;