use serde::{Deserialize, Serialize};


#[derive(Debug, Serialize, Deserialize)]
pub struct Event {

    pub id: Option<i64>,

    pub title: String,

    pub description: Option<String>,

    pub date: String,

    pub start_time: Option<String>,

    pub end_time: Option<String>,

    pub event_type: String,

    pub has_reminder: bool,

    pub reminder_datetime: Option<String>,
}