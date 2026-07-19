import "./TimeSegment.css";


type Props = {
    index: number;
};


function TimeSegment({ index }: Props) {

    const isHour = index % 4 === 0;
    const isFirst = index === 0;


    return (

        <div
            className={
                `time-segment
                ${isHour ? "time-segment--hour" : ""}
                ${isFirst ? "time-segment--first" : ""}
                `
            }
        />

    );

}


export default TimeSegment;