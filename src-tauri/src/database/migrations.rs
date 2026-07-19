use rusqlite::Connection;


pub fn create_tables(conn: &Connection) {


    conn.execute(
        r#"

        CREATE TABLE IF NOT EXISTS events (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            title TEXT NOT NULL,

            description TEXT,

            date TEXT NOT NULL,

            start_time TEXT,

            end_time TEXT,

            event_type TEXT NOT NULL,

            has_reminder INTEGER NOT NULL DEFAULT 0,

            reminder_datetime TEXT,

            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP

        );

        "#,
        [],
    )
    .expect("Failed creating events table");

}