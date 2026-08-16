# Calendar React

Desktopowa aplikacja kalendarza zbudowana w oparciu o **React + TypeScript + Tauri + Rust + SQLite**.

Projekt jest rozwijany jako aplikacja desktopowa przeznaczona do zarządzania wydarzeniami w kalendarzu.

Aktualnie projekt osiągnął pierwszy kamień milowy — **Beta 1.0**, w której dostępny jest podstawowy CRUD wydarzeń.

---

## Status projektu

**Wersja: Beta 1.0**

Aktualnie działają podstawowe operacje na wydarzeniach:

- tworzenie wydarzeń,
- wyświetlanie wydarzeń,
- edycja wydarzeń,
- usuwanie wydarzeń,
- widok miesiąca,
- widok dnia,
- filtrowanie wydarzeń według daty,
- wyświetlanie wydarzeń godzinowych,
- podstawowe typy wydarzeń,
- przypomnienia zapisane w strukturze wydarzenia,
- komunikacja React ↔ Rust,
- przechowywanie danych w SQLite.

Projekt jest nadal rozwijany. Przed kolejnymi większymi funkcjonalnościami planowana jest refaktoryzacja, optymalizacja oraz poprawa zabezpieczeń.

---

# Technologie

## Frontend

- React
- TypeScript
- Vite
- CSS

Frontend odpowiada za interfejs użytkownika, widoki kalendarza, formularze oraz komunikację z backendem Tauri.

## Backend

- Rust
- Tauri
- SQLite
- rusqlite

Rust odpowiada za operacje na bazie danych oraz udostępnia komendy wywoływane przez React.

## Baza danych

Dane wydarzeń przechowywane są w bazie:
SQLite


# Uruchomienie projektu
## Wymagania

Do uruchomienia projektu potrzebne są między innymi:

- Node.js
- npm
- Rust
- Cargo
- Tauri CLI

## Komendy
instalacja zależności
```bash
npm install
```

uruchomienie
```bash
npm run tauri
```

# Struktura projektu

```
src/
├── assets/
│
├── components/
│   ├── Calendar/
│   ├── Event/
│   └── Header/
│
├── context/
│
├── pages/
│   ├── DayView/
│   │   └── components/
│   │       ├── DeleteEventModal/
│   │       ├── EditEventModal/
│   │       ├── EventDetailsModal/
│   │       │
│   │       ├── TaskPanel/
│   │       │   └── components/
│   │       │       └── TaskItem/
│   │       │
│   │       └── TimeGrid/
│   │           └── components/
│   │               ├── DayColumn/
│   │               │   ├── EventsLayer/
│   │               │   └── TimeSegment/
│   │               │
│   │               ├── EventBlock/
│   │               ├── HourLabel/
│   │               └── TimeAxis/
│   │
│   ├── MonthView/
│   ├── WeekView/
│   └── YearView/
│
├── services/
│
├── types/
│
└── utils/
```
