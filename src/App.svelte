<script lang="ts">
    import { PrayerTimesModule } from "@/utils/OriginalPrayerTimes";
    import DisplayMonth from "@/components/DisplayMonth.svelte";

    const PT = PrayerTimesModule("ISNA");
    const times = PT.getTimes(new Date(), [43, -80], -5);
</script>

<section>
    <h1>TIMES</h1>
    <ul>
        {#each Object.entries(times) as item}
            <li>{item}</li>
        {/each}
    </ul>
</section>

<br />
<br />
<br />

<DisplayMonth />
