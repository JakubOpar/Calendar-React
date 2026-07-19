import "./HourLabel.css";


type Props = {
    hour: number;
};


function HourLabel({ hour }: Props) {

    const isFirst = hour === 0;


    return (

        <span
            className={
                `hour-label ${
                    isFirst
                        ? "hour-label--first"
                        : ""
                }`
            }
        >

            {String(hour).padStart(2, "0")}:00

        </span>

    );

}


export default HourLabel;