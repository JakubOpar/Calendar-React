use rusqlite::Connection;


const DATABASE_NAME: &str = "calendar.db";


pub fn get_connection() -> Connection {

    Connection::open(DATABASE_NAME)
        .expect("Cannot open database")

}


pub fn initialize_database() {

    let conn = get_connection();


    crate::database::migrations::create_tables(&conn);


    println!("Database initialized");

}