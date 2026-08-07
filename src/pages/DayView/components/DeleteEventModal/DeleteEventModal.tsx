import type { CalendarEvent } from "../../../../types/event";

import "./DeleteEventModal.css";

type Props = {

    event: CalendarEvent;

    onClose: () => void;

};

function DeleteEventModal({
    event,
    onClose
}: Props) {

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
                    >
                        Anuluj
                    </button>

                    <button
                        className="delete-event-confirm"
                    >
                        Usuń
                    </button>

                </div>

            </div>

        </div>

    );

}

export default DeleteEventModal;