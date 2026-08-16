import { useState } from "react";

import type { CalendarEvent } from "@/types/event";

import { updateEvent } from "@/services/eventService";

import { useEvents } from "@/context/EventContext";

import "./EditEventModal.css";


type Props = {

    event: CalendarEvent;

    onClose: () => void;

    onSaved?: () => void;

};


function EditEventModal({
    event,
    onClose,
    onSaved
}: Props) {


    const {
        refreshEvents
    } = useEvents();


    const [title, setTitle] =
        useState(event.title);


    const [startTime, setStartTime] =
        useState(event.startTime ?? "");


    const [endTime, setEndTime] =
        useState(event.endTime ?? "");


    const [type, setType] =
        useState<
            "work" | "meeting" | "personal"
        >(event.type);


    const [saving, setSaving] =
        useState(false);



    async function handleSave() {


        if (!title.trim()) {

            alert(
                "Tytuł wydarzenia jest wymagany"
            );

            return;

        }


        setSaving(true);


        try {


            const updatedEvent: CalendarEvent = {

                ...event,

                title: title.trim(),

                startTime:
                    startTime || undefined,

                endTime:
                    endTime || undefined,

                type

            };


            await updateEvent(
                updatedEvent
            );


            await refreshEvents();


            if (onSaved) {

                onSaved();

            }
            else {

                onClose();

            }


        }
        catch (error) {

            console.error(
                "Błąd aktualizacji wydarzenia:",
                error
            );

            alert(
                "Nie udało się zapisać zmian"
            );

        }
        finally {

            setSaving(false);

        }

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

                    disabled={saving}

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

                    disabled={saving}

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

                    disabled={saving}

                />



                <label>
                    Typ
                </label>


                <select

                    value={type}

                    onChange={
                        e =>
                            setType(
                                e.target.value as
                                    | "work"
                                    | "meeting"
                                    | "personal"
                            )
                    }

                    disabled={saving}

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

                        disabled={saving}

                    >
                        Anuluj

                    </button>



                    <button

                        onClick={handleSave}

                        disabled={saving}

                    >

                        {
                            saving
                                ? "Zapisywanie..."
                                : "Zapisz zmiany"
                        }

                    </button>


                </div>


            </div>


        </div>

    );

}


export default EditEventModal;

