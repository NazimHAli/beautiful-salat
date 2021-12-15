<script lang="ts">
  export let prayerTimes = [];

  let displayColumns = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
</script>

<div class="table-container">
  <table class="table">
    <thead class="table-header">
      <th>Prayer Times</th>
    </thead>

    <tbody class="table-body">
      {#each displayColumns as name}
        <tr>
          <th>{name}</th>
          <td>{prayerTimes[name]}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  @import "../styles/card.scss";
</style>
