<script lang="ts">
  // import { PrayerTimes } from "beautiful-salat";
  // import { afterUpdate } from "svelte";
  import "@/styles/themes.scss";

  // const prayTimes = new PrayerTimes();
  let todaysDate = new Date();
  export let calculatedPrayerTimes = [];

  let displayColumns = ["Day", "Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

  const options = {
    latitude: 40,
    longitude: 83,
    timezone: -5,
    dst: "auto",
    method: "MWL",
  };

  export let theme = "dark";

  // // display monthly timetable
  // function displayMonth(offset: number) {
  //   prayTimes.setPrayerCalculationMethod(options.method);
  //   todaysDate.setMonth(todaysDate.getMonth() + 1 * offset);

  //   let month = todaysDate.getMonth();
  //   let year = todaysDate.getFullYear();

  //   getMonthData(year, month);
  //   calculatedPrayerTimes = prayTimes
  // }

  // function getMonthData(year: number, month: number) {
  //   let date = new Date(year, month, 1);
  //   let endDate = new Date(year, month + 1, 1);
  //   let format = "12hNS";
  //   const storedTimes = [];

  //   while (date < endDate) {
  //     let times = prayTimes.getPrayerTimes(date, [options.latitude, options.longitude], options.timezone, options.dst, format);
  //     times["day"] = date.getDate();

  //     storedTimes.push(times);
  //     date.setDate(date.getDate() + 1); // Set next day
  //   }

  //   calculatedPrayerTimes = storedTimes;
  // }

  // afterUpdate(() => {
  //   displayMonth(0);
  // });
</script>

<div class="table-container">
  <table class={theme + "_table"}>
    <thead>
      <tr class={theme + "_title"}>
        {#each displayColumns as name}
          <th class={theme + "_title_cell"}>{name}</th>
        {/each}
      </tr>
    </thead>

    <tbody>
      {#each calculatedPrayerTimes as prayers (prayers.day)}
        <tr class={theme + "_row"} class:active={todaysDate.getDate() === prayers.day}>
          {#each displayColumns as name}
            <td>{prayers[name] || prayers["day"]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
