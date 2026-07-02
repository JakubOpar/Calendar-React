use tauri_plugin_sql::Builder as SqlBuilder;

#[tauri::command]
fn db_test() -> String {
  "SQLite backend connected".into()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .plugin(SqlBuilder::default().build())
    .invoke_handler(tauri::generate_handler![db_test])
    .setup(|_app| {
      println!("App started");
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

fn main() {
  run();
}