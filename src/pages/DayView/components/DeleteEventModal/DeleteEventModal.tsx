import { useState } from "react";

import type { CalendarEvent } from "@/types/event";

import { deleteEvent } from "@/services/eventService";

import { useEvents } from "@/context/EventContext";

import "./DeleteEventModal.css";


type Props = {

    event: CalendarEvent;

    onClose: () => void;

    onDeleted?: () => void;

};


function DeleteEventModal({
    event,
    onClose,
    onDeleted
}: Props) {


    const {
        refreshEvents
    } = useEvents();


    const [deleting, setDeleting] =
        useState(false);



    async function handleDelete() {

        if (event.id === undefined) {

            return;

        }


        setDeleting(true);


        try {

            await deleteEvent(
                event.id
            );


            await refreshEvents();


            if (onDeleted) {

                onDeleted();

            }
            else {

                onClose();

            }

        }
        catch (error) {

            console.error(
                "Błąd usuwania wydarzenia:",
                error
            );

            alert(
                "Nie udało się usunąć wydarzenia"
            );

        }
        finally {

            setDeleting(false);

        }

    }



    return (

        <div className="delete-event-overlay">


            <div className="delete-event-modal">


                <h2>
                    Usuń wydarzenie
                </h2>


                <p>

                    Czy na pewno chcesz usunąć wydarzenie

                    <strong>
                        {" "}
                        {event.title}
                    </strong>

                    ?

                </p>



                <div className="delete-event-footer">


                    <button

                        onClick={onClose}

                        disabled={deleting}

                    >
                        Anuluj

                    </button>



                    <button

                        className="delete-event-confirm"

                        onClick={handleDelete}

                        disabled={deleting}

                    >

                        {
                            deleting
                                ? "Usuwanie..."
                                : "Usuń"
                        }

                    </button>


                </div>


            </div>


        </div>

    );

}


export default DeleteEventModal;
