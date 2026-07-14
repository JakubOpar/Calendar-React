import "./EventBadge.css";

type Props = {
    type: string;
};


function EventBadge({ type }: Props) {

    return (
        <div className={`event-badge event-badge--${type}`}>
            {type}
        </div>
    );

}


export default EventBadge;