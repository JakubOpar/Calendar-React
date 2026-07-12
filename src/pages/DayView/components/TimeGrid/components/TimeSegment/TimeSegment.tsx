import HourLabel from "../HourLabel/HourLabel";

import "./TimeSegment.css";


type Props = {
    index:number;
};


function TimeSegment({index}:Props){


    const hour = Math.floor(index / 4);

    const minute = (index % 4) * 15;


    return (

        <div className="time-segment">


            <HourLabel
                hour={hour}
                minute={minute}
            />


            <div className="time-segment-content">

            </div>


        </div>

    );

}


export default TimeSegment;