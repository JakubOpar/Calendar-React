export function timeToMinutes(time:string){

    const [
        hour,
        minute
    ] = time.split(":").map(Number);


    return hour * 60 + minute;

}



export function timeToPosition(time:string){

    const minutes = timeToMinutes(time);


    const segmentHeight = 20;


    return (minutes / 15) * segmentHeight;

}



export function eventHeight(
    start:string,
    end:string
){

    const duration =
        timeToMinutes(end)
        -
        timeToMinutes(start);



    return (
        duration / 15
    ) * 20;

}