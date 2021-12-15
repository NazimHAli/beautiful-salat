<script lang="ts">
  export let prayerTimes = [];
  export let theme = "dark";

  let displayColumns = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
</script>

<div class="table-container">
  <table class={theme + "_table"}>
    <thead>
      <tr class={theme + "_title"}>
        <th class={theme + "_title_cell"}>Prayer Times</th>
      </tr>
    </thead>

    <tbody class={theme + "_body"}>
      {#each displayColumns as name}
        <tr class={theme + "_row"}>
          <th>{name}</th>
          <td>{prayerTimes[name]}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  @import "../styles/themes.scss";
</style>
