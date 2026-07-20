import "./EventsLayer.css";

import EventBlock from "../../EventBlock/EventBlock";

import {
    useEvents
} from "../../../../../../../context/EventContext";


type Props = {

    date: Date;

};



function EventsLayer({
    date
}: Props) {


    const {
        events
    } = useEvents();



    const dayEvents = events.filter(event => {


        const eventDate = new Date(event.date);


        return (

            eventDate.getFullYear()
                === date.getFullYear()

            &&

            eventDate.getMonth()
                === date.getMonth()

            &&

            eventDate.getDate()
                === date.getDate()

        );

    });



    const timedEvents = dayEvents.filter(event =>

        event.startTime !== undefined
        &&
        event.endTime !== undefined

    );



    return (

        <div className="events-layer">


            {
                timedEvents.map(event => (

                    <EventBlock

                        key={event.id}

                        event={event}

                    />

                ))
            }


        </div>

    );

}


export default EventsLayer;