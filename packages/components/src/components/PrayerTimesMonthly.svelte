<script lang="ts">
  let todaysDate = new Date();
  export let prayerTimes = [];
  export let theme = "";
  export let maxRows = 31;

  let displayColumns = ["Day", "Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
</script>

<div class="bg-primary text-primary drop-shadow-lg m-2 w-1/3 border border-solid {theme}">
  <table class="w-full">
    <thead>
      <tr>
        {#each displayColumns as name}
          <th class="text-xl text-center py-3 bg-secondary">{name}</th>
        {/each}
      </tr>
    </thead>

    <tbody class="text-secondary">
      {#each prayerTimes.slice(0, maxRows) as prayers (prayers.day)}
        <tr class:bg-secondary={todaysDate.getDate() === prayers.day} class:text-primary={todaysDate.getDate() === prayers.day}>
          {#each displayColumns as name}
            <td class="text-center">{prayers[name] || prayers["day"]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
