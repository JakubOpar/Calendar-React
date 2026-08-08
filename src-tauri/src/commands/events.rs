use crate::database::connection::get_connection;
use crate::models::event::Event;



#[tauri::command]
pub fn create_event(event: Event) -> Result<(), String> {


    let db = get_connection();


let guard = db
    .lock()
    .unwrap();


let conn = guard
    .as_ref()
    .ok_or(
        "Database connection not initialized"
    )?;



    conn.execute(

        r#"

        INSERT INTO events
        (
            title,
            description,
            date,
            start_time,
            end_time,
            event_type,
            has_reminder,
            reminder_datetime
        )

        VALUES
        (
            ?1,
            ?2,
            ?3,
            ?4,
            ?5,
            ?6,
            ?7,
            ?8
        )

        "#,

        (
            &event.title,
            &event.description,
            &event.date,
            &event.start_time,
            &event.end_time,
            &event.event_type,
            event.has_reminder,
            &event.reminder_datetime
        )

    )
    .map_err(
        |e| e.to_string()
    )?;


    Ok(())

}




#[tauri::command]
pub fn get_events() -> Result<Vec<Event>, String> {


    let db = get_connection();


let guard = db
    .lock()
    .unwrap();


let conn = guard
    .as_ref()
    .ok_or(
        "Database connection not initialized"
    )?;



    let mut statement = conn
        .prepare(

            r#"

            SELECT

                id,

                title,

                description,

                date,

                start_time,

                end_time,

                event_type,

                has_reminder,

                reminder_datetime


            FROM events


            ORDER BY

                date,

                start_time


            "#

        )
        .map_err(
            |e| e.to_string()
        )?;



    let events = statement
        .query_map(

            [],

            |row| {


                Ok(Event {


                    id: row.get(0)?,


                    title: row.get(1)?,


                    description: row.get(2)?,


                    date: row.get(3)?,


                    start_time: row.get(4)?,


                    end_time: row.get(5)?,


                    event_type: row.get(6)?,


                    has_reminder:
                        row.get::<_, i32>(7)? == 1,


                    reminder_datetime:
                        row.get(8)?

                })


            }

        )
        .map_err(
            |e| e.to_string()
        )?



        .collect::<Result<Vec<_>, _>>()

        .map_err(
            |e| e.to_string()
        )?;



    Ok(events)

}

#[tauri::command]
pub fn update_event(event: Event) -> Result<(), String> {

    let db = get_connection();

    let binding = db
        .lock()
        .map_err(|e| e.to_string())?;

    let conn = binding
        .as_ref()
        .ok_or_else(|| "Database connection is not available".to_string())?;

    let id = event
        .id
        .ok_or_else(|| "Event ID is required".to_string())?;

    conn.execute(
        r#"
        UPDATE events
        SET
            title = ?1,
            description = ?2,
            date = ?3,
            start_time = ?4,
            end_time = ?5,
            event_type = ?6,
            has_reminder = ?7,
            reminder_datetime = ?8
        WHERE id = ?9
        "#,
        (
            event.title,
            event.description,
            event.date,
            event.start_time,
            event.end_time,
            event.event_type,
            event.has_reminder,
            event.reminder_datetime,
            id,
        ),
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}


#[tauri::command]
pub fn delete_event(id: i64) -> Result<(), String> {

    let db = get_connection();

    let binding = db
        .lock()
        .map_err(|e| e.to_string())?;

    let conn = binding
        .as_ref()
        .ok_or_else(|| "Database connection is not available".to_string())?;

    conn.execute(
        "DELETE FROM events WHERE id = ?1",
        [id],
    )
    .map_err(|e| e.to_string())?;

    Ok(())
}