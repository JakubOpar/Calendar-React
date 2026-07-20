import { useState } from "react";

import {
    useEvents
} from "../../context/EventContext";

import "./EventDialog.css";


type Props = {
    open: boolean;
    onClose: () => void;
};


function EventDialog({
    open,
    onClose
}: Props) {


    const {
        addEvent
    } = useEvents();



    const [title, setTitle] = useState("");

    const [date, setDate] = useState("");

    const [startTime, setStartTime] = useState("");

    const [endTime, setEndTime] = useState("");

    const [type, setType] =
        useState<
            "work" | "meeting" | "personal"
        >(
            "personal"
        );

    const [description, setDescription] =
        useState("");

    const [hasReminder, setHasReminder] =
        useState(false);

    const [reminderDateTime, setReminderDateTime] =
        useState("");



    if (!open) {
        return null;
    }



    async function handleSave() {


        if (!title || !date) {

            alert(
                "Tytuł i data są wymagane"
            );

            return;

        }



        try {


            await addEvent({

                title,

                description:
                    description || undefined,


                date,


                start_time:
                    startTime || undefined,


                end_time:
                    endTime || undefined,


                event_type: type,


                has_reminder:
                    hasReminder,


                reminder_datetime:
                    hasReminder &&
                    reminderDateTime
                        ? reminderDateTime
                        : undefined

            });



            onClose();



            // czyszczenie formularza

            setTitle("");

            setDate("");

            setStartTime("");

            setEndTime("");

            setType("personal");

            setDescription("");

            setHasReminder(false);

            setReminderDateTime("");


        }
        catch(error) {


            console.error(
                "Błąd zapisu wydarzenia",
                error
            );


            alert(
                "Nie udało się zapisać wydarzenia"
            );


        }

    }



    return (

        <div className="event-dialog-overlay">


            <div className="event-dialog">


                <div className="event-dialog__header">

                    <h2>
                        Nowe wydarzenie
                    </h2>

                </div>




                <div className="event-dialog__content">


                    <div className="event-dialog__field">

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

                            placeholder="Np. Spotkanie"

                        />

                    </div>





                    <div className="event-dialog__field">

                        <label>
                            Data
                        </label>


                        <input

                            type="date"

                            value={date}

                            onChange={
                                e =>
                                    setDate(
                                        e.target.value
                                    )
                            }

                        />

                    </div>





                    <div className="event-dialog__row">


                        <div className="event-dialog__field">

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

                        </div>




                        <div className="event-dialog__field">

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

                        </div>


                    </div>





                    <div className="event-dialog__field">


                        <label>
                            Typ wydarzenia
                        </label>



                        <select

                            value={type}

                            onChange={
                                e =>
                                    setType(
                                        e.target.value as
                                        "work" |
                                        "meeting" |
                                        "personal"
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


                    </div>






                    <div className="event-dialog__field">


                        <label>
                            Opis
                        </label>



                        <textarea

                            value={description}

                            onChange={
                                e =>
                                    setDescription(
                                        e.target.value
                                    )
                            }

                        />


                    </div>






                    <div className="event-dialog__checkbox">


                        <label>


                            <input

                                type="checkbox"

                                checked={hasReminder}

                                onChange={
                                    e =>
                                        setHasReminder(
                                            e.target.checked
                                        )
                                }

                            />


                            Przypomnienie


                        </label>


                    </div>






                    {
                        hasReminder && (


                            <div className="event-dialog__field">


                                <label>
                                    Data przypomnienia
                                </label>



                                <input

                                    type="datetime-local"

                                    value={reminderDateTime}

                                    onChange={
                                        e =>
                                            setReminderDateTime(
                                                e.target.value
                                            )
                                    }

                                />


                            </div>


                        )
                    }




                </div>





                <div className="event-dialog__footer">


                    <button
                        onClick={onClose}
                    >
                        Anuluj
                    </button>




                    <button
                        onClick={handleSave}
                    >
                        Zapisz
                    </button>



                </div>



            </div>


        </div>

    );

}


export default EventDialog;