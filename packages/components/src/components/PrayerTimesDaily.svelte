<script lang="ts">
  export let prayerTimes = [];
</script>

<div class="table-container">
  <table class="table">
    <thead class="table-header">
      <th>Prayer Times</th>
    </thead>
    <tbody class="table-body">
      {#each prayerTimes as prayer}
        <tr>
          <th>{prayer[0]}</th>
          <td>{prayer[1]}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  @import "../styles/card.scss";
</style>
