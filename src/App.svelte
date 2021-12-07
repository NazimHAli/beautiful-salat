<script lang="ts">
    import { PrayerTimes } from "@/utils/PrayerTimes";
    import DisplayMonth from "@/components/DisplayMonth.svelte";

    const prayerTimes = new PrayerTimes("ISNA");
    const times = prayerTimes.getPrayerTimes(new Date(), [43, -80], -5);
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
