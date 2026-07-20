use rusqlite::Connection;
use std::sync::Mutex;

use tauri::AppHandle;
use tauri::Manager;


static DB: Mutex<Option<Connection>> = Mutex::new(None);



pub fn initialize_database(app: &AppHandle) {


    let app_dir = app
        .path()
        .app_data_dir()
        .expect(
            "Cannot get app data directory"
        );


    std::fs::create_dir_all(&app_dir)
        .expect(
            "Cannot create app data directory"
        );


    let db_path = app_dir.join(
        "calendar.db"
    );


    println!(
        "Database path: {:?}",
        db_path
    );


    let connection = Connection::open(
        db_path
    )
    .expect(
        "Cannot open database"
    );


    connection.execute_batch(

        r#"

        CREATE TABLE IF NOT EXISTS events (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            title TEXT NOT NULL,

            description TEXT,

            date TEXT NOT NULL,

            start_time TEXT,

            end_time TEXT,

            event_type TEXT NOT NULL DEFAULT 'personal',

            has_reminder INTEGER NOT NULL DEFAULT 0,

            reminder_datetime TEXT,

            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP

        );

        "#

    )
    .expect(
        "Cannot create tables"
    );



    let mut db = DB.lock()
        .unwrap();


    *db = Some(connection);


    println!(
        "Database initialized"
    );

}



pub fn get_connection() -> &'static Mutex<Option<Connection>> {

    &DB

}