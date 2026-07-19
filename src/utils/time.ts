export const SEGMENT_HEIGHT = 20;

export const MINUTE_HEIGHT = SEGMENT_HEIGHT / 15;


export function timeToMinutes(time: string) {

    const [
        hour,
        minute
    ] = time.split(":").map(Number);


    return hour * 60 + minute;

}



export function timeToPosition(time: string) {

    const minutes = timeToMinutes(time);


    return minutes * MINUTE_HEIGHT;

}



export function eventHeight(
    start: string,
    end: string
) {

    const duration =
        timeToMinutes(end) -
        timeToMinutes(start);


    return duration * MINUTE_HEIGHT;

}