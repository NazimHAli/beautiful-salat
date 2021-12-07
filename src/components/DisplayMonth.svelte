<script lang="ts">
    import { PrayerTimes } from "@/utils/PrayerTimes";
    import { afterUpdate } from "svelte";

    const prayTimes = new PrayerTimes();
    let currentDate = new Date();
    let timeFormat = 1;

    function getEle(id) {
        return document.getElementById(id);
    }

    // display monthly timetable
    function displayMonth(offset) {
        //@ts-ignore
        let lat = getEle("latitude").value;
        //@ts-ignore
        let lng = getEle("longitude").value;
        //@ts-ignore
        let timeZone = getEle("timezone").value;
        //@ts-ignore
        let dst = getEle("dst").value;
        //@ts-ignore
        let method = getEle("method").value;

        prayTimes.setPrayerCalculationMethod(method);
        currentDate.setMonth(currentDate.getMonth() + 1 * offset);

        let month = currentDate.getMonth();
        let year = currentDate.getFullYear();
        let title = monthFullName(month) + " " + year;

        getEle("table-title").innerHTML = title;
        makeTable(year, month, lat, lng, timeZone, dst);
    }

    // make monthly timetable
    function makeTable(year, month, lat, lng, timeZone, dst) {
        let items = {
            day: "Day",
            fajr: "Fajr",
            sunrise: "Sunrise",
            dhuhr: "Dhuhr",
            asr: "Asr",
            maghrib: "Maghrib",
            isha: "Isha",
        };

        let tbody = document.createElement("tbody");
        tbody.appendChild(makeTableRow(items, items, "head-row"));

        let date = new Date(year, month, 1);
        let endDate = new Date(year, month + 1, 1);
        let format = timeFormat ? "12hNS" : "24h";

        while (date < endDate) {
            let times = prayTimes.getPrayerTimes(
                date,
                [lat, lng],
                timeZone,
                dst,
                format
            );

            times.day = date.getDate();

            let today = new Date();
            let isToday =
                date.getMonth() == today.getMonth() &&
                date.getDate() == today.getDate();
            let klass = isToday ? "today-row" : "";

            tbody.appendChild(makeTableRow(times, items, klass));
            date.setDate(date.getDate() + 1); // next day
        }

        removeAllChild(getEle("timetable"));
        getEle("timetable").appendChild(tbody);
    }

    // make a table row
    function makeTableRow(data, items, klass) {
        let row = document.createElement("tr");
        for (let i in items) {
            let cell = document.createElement("td");
            cell.innerHTML = data[i];
            cell.style.width = i == "day" ? "2.5em" : "3.7em";
            row.appendChild(cell);
        }
        row.className = klass;
        return row;
    }

    // remove all children of a node
    function removeAllChild(node) {
        if (node == undefined || node == null) return;

        while (node.firstChild) node.removeChild(node.firstChild);
    }

    // update table
    function update() {
        displayMonth(0);
    }

    // return month full name
    function monthFullName(month) {
        let monthName = new Array(
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        );

        return monthName[month];
    }

    afterUpdate(() => {
        displayMonth(0);
    });
</script>

<div class="header">
    <form class="form" on:submit="{update}">
        Latitude:
        <input
            type="text"
            value="43"
            id="latitude"
            size="2"
            on:input="{update}"
        />

        Longitude:
        <input
            type="text"
            value="-80"
            id="longitude"
            size="2"
            on:input="{update}"
        />

        Time Zone:
        <input
            type="text"
            value="-5"
            id="timezone"
            size="2"
            on:input="{update}"
        />

        DST:
        <select id="dst" size="1" style="font-size: 12px;" on:input="{update}">
            <option value="auto">Auto</option>
            <option value="0">0</option>
            <option value="1">1</option>
        </select>

        Method:
        <select
            id="method"
            size="1"
            style="font-size: 12px;"
            on:input="{update}"
        >
            <option value="MWL">Muslim World League (MWL)</option>
            <option value="ISNA">Islamic Society of North America (ISNA)</option
            >
            <option value="Egypt">Egyptian General Authority of Survey</option>
            <option value="Makkah">Umm al-Qura University, Makkah</option>
            <option value="Karachi"
                >University of Islamic Sciences, Karachi</option
            >
            <option value="Jafari">Shia Ithna-Ashari (Jafari)</option>
            <option value="Tehran"
                >Institute of Geophysics, University of Tehran</option
            >
        </select>
    </form>
</div>

<table>
    <tr>
        <td>
            <a href="/#" class="arrow">&lt;&lt;</a>
        </td>
        <td id="table-title" class="caption"></td>
        <td><a href="/#" class="arrow">&gt;&gt;</a></td>
    </tr>
</table>

<table id="timetable" class="timetable">
    <tbody></tbody>
</table>
