mod commands;
mod models;
mod database;

use database::connection::initialize_database;


#[tauri::command]
fn db_test() -> String {
    "SQLite backend connected".into()
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {

    tauri::Builder::default()

        .invoke_handler(
        tauri::generate_handler![
        db_test,
        commands::events::create_event,
        commands::events::get_events,
        commands::events::test_insert
    ]
)

        .setup(|app| {

            println!("App started");


            initialize_database();


            if cfg!(debug_assertions) {

                app.handle()
                    .plugin(
                        tauri_plugin_log::Builder::default()
                            .level(log::LevelFilter::Info)
                            .build(),
                    )?;

            }


            Ok(())

        })

        .run(
            tauri::generate_context!()
        )

        .expect(
            "error while running tauri application"
        );

}