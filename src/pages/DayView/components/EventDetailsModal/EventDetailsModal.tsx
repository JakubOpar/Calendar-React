import { useState } from "react";

import type { CalendarEvent } from "@/types/event";

import EditEventModal from "../EditEventModal/EditEventModal";
import DeleteEventModal from "../DeleteEventModal/DeleteEventModal";

import "./EventDetailsModal.css";


type Props = {

    event: CalendarEvent;

    onClose: () => void;

};



function EventDetailsModal({
    event,
    onClose
}: Props) {


    const [editMode, setEditMode] =
        useState(false);

    const [deleteMode, setDeleteMode] =
        useState(false);



    const eventTypeNames: Record<
        string,
        string
    > = {

        work: "Praca",

        meeting: "Spotkanie",

        personal: "Prywatne"

    };



    return (

        <>

            <div className="event-details-overlay">


                <div className="event-details-modal">


                    <div className="event-details-header">


                        <h2>
                            {event.title}
                        </h2>


                    </div>




                    <div className="event-details-content">


                        <p>

                            Typ:
                            {" "}
                            {eventTypeNames[event.type]}

                        </p>



                        {
                            event.startTime &&
                            event.endTime &&
                            (

                                <p>

                                    Godzina:
                                    {" "}
                                    {event.startTime}
                                    {" - "}
                                    {event.endTime}

                                </p>

                            )
                        }



                        <p>

                            Data:
                            {" "}
                            {
                                event.date.toLocaleDateString(
                                    "pl-PL"
                                )
                            }

                        </p>


                    </div>





                    <div className="event-details-footer">


                        <button
                            onClick={() =>
                                setEditMode(true)
                            }
                        >

                            Edytuj

                        </button>

                        <button
                            className="event-details-delete"
                            onClick={() =>
                                setDeleteMode(true)
                            }
                        >
                            Usuń
                        </button>



                        <button
                            onClick={onClose}
                        >

                            Zamknij

                        </button>


                    </div>


                </div>


            </div>




            {
                editMode && (

                    <EditEventModal
                        event={event}
                        onClose={() => setEditMode(false)}
                        onSaved={() => {
                            setEditMode(false);
                            onClose();
                        }}
                    />

                )
            }

            {
                deleteMode && (

                    <DeleteEventModal

                        event={event}

                        onClose={() =>
                            setDeleteMode(false)
                        }

                        onDeleted={() => {

                            setDeleteMode(false);

                            onClose();

                        }}

                    />

                )
            }


        </>

    );

}


export default EventDetailsModal;