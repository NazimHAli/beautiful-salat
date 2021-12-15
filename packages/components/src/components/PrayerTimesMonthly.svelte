<script lang="ts">
  let todaysDate = new Date();
  export let prayerTimes = [];
  export let theme = "dark";

  let displayColumns = ["Day", "Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
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
      {#each prayerTimes as prayers (prayers.day)}
        <tr class={theme + "_row"} class:active={todaysDate.getDate() === prayers.day}>
          {#each displayColumns as name}
            <td>{prayers[name] || prayers["day"]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  @import "../styles/themes.scss";
</style>
