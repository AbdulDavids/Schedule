
# VC-Schedule

## Description

This is a web-based application that I've built to keep track of my class schedule. It displays upcoming classes and provides color-coding to differentiate between ongoing and upcoming classes. It uses a .csv file to store timetable data. 

## Features

- View your class schedule.
- Color-coded classes for easy identification:
  - Ongoing classes are highlighted in green.
  - Upcoming classes are highlighted in red.

## Usage

1. Clone the repository to your local machine.
2. Edit the timetable.csv to reflect your timetable
3. Open the `index.html` file in a web browser.
4. Your timetable will be displayed, with the current and upcoming classes highlighted.
5. You can use Github Pages to host your webpage.


## Data Format

The timetable data is loaded from a CSV file. The CSV format should include the following columns:

- Module Code
- Venue
- Date (in YYYY-MM-DD format)
- Start Time (in HH:MM format)
- End Time (in HH:MM format)

Example CSV data:

```
Module Code,Venue,Date,Start Time,End Time
MATH101,Room 101,2023-10-16,09:00,10:30
CHEM201,Lab 3,2023-10-18,14:00,16:00
```

