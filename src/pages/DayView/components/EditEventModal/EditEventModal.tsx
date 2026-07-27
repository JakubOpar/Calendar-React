import { useState } from "react";

import type { CalendarEvent } from "../../../../types/event";

import "./EditEventModal.css";


type Props = {

    event: CalendarEvent;

    onClose: () => void;

};



function EditEventModal({
    event,
    onClose
}: Props) {


    const [title,setTitle] =
        useState(event.title);


    const [startTime,setStartTime] =
        useState(event.startTime ?? "");


    const [endTime,setEndTime] =
        useState(event.endTime ?? "");


    const [type,setType] =
        useState<
            "work" | "meeting" | "personal"
        >(event.type);



    function handleSave(){

        const updatedEvent = {

            ...event,

            title,

            startTime,

            endTime,

            type

        };


        console.log(
            "Zmiana eventu:",
            updatedEvent
        );


        onClose();

    }



    return (

        <div className="edit-event-overlay">


            <div className="edit-event-modal">


                <h2>
                    Edycja wydarzenia
                </h2>



                <label>
                    Tytuł
                </label>


                <input

                    value={title}

                    onChange={
                        e =>
                            setTitle(
                                e.target.value
                            )
                    }

                />



                <label>
                    Początek
                </label>


                <input

                    type="time"

                    value={startTime}

                    onChange={
                        e =>
                            setStartTime(
                                e.target.value
                            )
                    }

                />



                <label>
                    Koniec
                </label>


                <input

                    type="time"

                    value={endTime}

                    onChange={
                        e =>
                            setEndTime(
                                e.target.value
                            )
                    }

                />



                <label>
                    Typ
                </label>


                <select

                    value={type}

                    onChange={
                        e =>
                            setType(
                                e.target.value as any
                            )
                    }

                >

                    <option value="work">
                        Praca
                    </option>


                    <option value="meeting">
                        Spotkanie
                    </option>


                    <option value="personal">
                        Prywatne
                    </option>


                </select>



                <div className="edit-event-buttons">


                    <button
                        onClick={onClose}
                    >
                        Anuluj
                    </button>



                    <button
                        onClick={handleSave}
                    >
                        Zapisz zmiany
                    </button>


                </div>


            </div>


        </div>

    );

}


export default EditEventModal;