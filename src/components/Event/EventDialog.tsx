import "./EventDialog.css";

type Props = {
    open: boolean;
    onClose: () => void;
};

function EventDialog({ open, onClose }: Props) {
    if (!open) {
        return null;
    }

    return (
        <div className="event-dialog-overlay">

            <div className="event-dialog">

                <div className="event-dialog__header">
                    <h2>Nowe zadanie</h2>
                </div>

                <div className="event-dialog__content">

                    <label>
                        Tytuł
                    </label>

                    <input
                        type="text"
                        placeholder="Np. Spotkanie"
                    />

                </div>

                <div className="event-dialog__footer">

                    <button onClick={onClose}>
                        Anuluj
                    </button>

                    <button>
                        Zapisz
                    </button>

                </div>

            </div>

        </div>
    );
}

export default EventDialog;