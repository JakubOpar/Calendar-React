import HourRow from "./components/HourRow/HourRow";

import "./TimeGrid.css";

function TimeGrid() {

    const hours = Array.from({ length: 24 }, (_, i) => i);

    return (
        <div className="time-grid">

            {hours.map(hour => (
                <HourRow
                    key={hour}
                    hour={hour}
                />
            ))}

        </div>
    );
}

export default TimeGrid;