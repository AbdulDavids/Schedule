const timetableSelect = document.getElementById('timetable-select');
const timetableContainer = document.getElementById('timetable-container');

function loadTimetable() {
    const timetableFile = 'timetable.csv';
    fetch(timetableFile)
        .then(response => response.text())
        .then(data => {
            const timetable = parseTimetable(data);
            displayTimetable(timetable);
        });
}

function parseTimetable(data) {
    const rows = data.split('\n');
    const timetable = [];
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        const classData = {
            moduleCode: row[0],
            venue: row[1],
            date: row[2],
            startTime: row[3],
            endTime: row[4]
        };
        timetable.push(classData);
    }
    return timetable;
}

function formatDayAndDate(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'long', day: '2-digit', month: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function displayTimetable(timetable) {
    const currentTime = new Date();
    let currentClassIndex = -1;

    let tableHtml = '<table>';
    tableHtml += '<tr><th>Module</th><th>Venue</th><th>Day & Date</th><th>Time</th></tr>';

    for (let i = 0; i < 5; i++) {
        const classData = timetable[i];
        const classStartTime = new Date(classData.date + ' ' + classData.startTime);
        const classEndTime = new Date(classData.date + ' ' + classData.endTime);

        const formattedDate = formatDayAndDate(classData.date);
        const timeRange = `${classData.startTime} - ${classData.endTime}`;

        let classHtml = `<tr class="next-classes">
            <td>${classData.moduleCode}</td>
            <td>${classData.venue}</td>
            <td>${formattedDate}</td>
            <td>${timeRange}</td>
        </tr>`;

        if (classStartTime <= currentTime && currentTime <= classEndTime) {
            classHtml = `<tr class="current-class">
                <td>${classData.moduleCode}</td>
                <td>${classData.venue}</td>
                <td>${formattedDate}</td>
                <td>${timeRange}</td>
            </tr>`;
            currentClassIndex = i;
        } else if (classStartTime > currentTime && currentClassIndex === -1) {
            classHtml = `<tr class="upcoming-class">
                <td>${classData.moduleCode}</td>
                <td>${classData.venue}</td>
                <td>${formattedDate}</td>
                <td>${timeRange}</td>
            </tr>`;
            currentClassIndex = i;
        }

        tableHtml += classHtml;
    }

    if (currentClassIndex === -1) {
        timetableContainer.innerHTML = '<p>No upcoming classes.</p>';
        return;
    }

    tableHtml += '</table>';
    timetableContainer.innerHTML = tableHtml;
}


loadTimetable();
