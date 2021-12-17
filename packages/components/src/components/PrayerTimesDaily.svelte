<script lang="ts">
  export let prayerTimes = [];
  export let theme = "";

  let displayColumns = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
</script>

<div class="bg-primary text-primary drop-shadow-lg m-2 pt-8 w-60 border border-solid {theme}">
  <h3 class="text-xl text-center py-3 bg-secondary tracking-widest">Prayer Times</h3>

  <div class="grid grid-cols-5 gap-y-1 my-4 text-secondary">
    {#each displayColumns as name}
      <span class="font-normal col-start-2">{name}</span>
      <span class="col-start-4">{prayerTimes[name]}</span>
    {/each}
  </div>
</div>
