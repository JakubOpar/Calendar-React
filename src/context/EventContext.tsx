import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import type { CalendarEvent } from "../types/event";
import type { EventForm } from "../types/eventForm";

import {
    getEvents,
    createEvent
} from "../services/eventService";


type EventContextType = {

    events: CalendarEvent[];

    refreshEvents: () => Promise<void>;

    addEvent: (
        event: EventForm
    ) => Promise<void>;

};


const EventContext =
    createContext<EventContextType | null>(null);



export function EventProvider({
    children
}: {
    children: React.ReactNode;
}) {


    const [events, setEvents] =
        useState<CalendarEvent[]>([]);



    async function refreshEvents() {

        const data =
            await getEvents();

        setEvents(data);

    }


    async function addEvent(
        event: EventForm
    ) {

        await createEvent(event);

        await refreshEvents();

    }



    useEffect(() => {

        refreshEvents();

    }, []);



    return (

        <EventContext.Provider

            value={{
                events,
                refreshEvents,
                addEvent
            }}

        >

            {children}

        </EventContext.Provider>

    );

}



export function useEvents() {

    const context =
        useContext(EventContext);


    if (!context) {

        throw new Error(
            "useEvents must be inside EventProvider"
        );

    }


    return context;

}