import "./HourLabel.css";


type Props = {
    hour:number;
    minute:number;
};


function HourLabel({hour,minute}:Props){


    if(minute !== 0){

        return (
            <div className="hour-label empty">

            </div>
        );

    }


    return (

        <div className="hour-label">

            {String(hour).padStart(2,"0")}:00

        </div>

    );

}


export default HourLabel;