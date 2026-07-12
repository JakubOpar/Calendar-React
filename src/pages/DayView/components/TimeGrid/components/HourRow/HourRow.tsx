import "./HourRow.css";

type Props = {
    hour: number;
};

function HourRow({ hour }: Props) {

    return (
        <div className="hour-row">

            <div className="hour-label">
                {String(hour).padStart(2, "0")}:00
            </div>

            <div className="hour-content">

            </div>

        </div>
    );
}

export default HourRow;