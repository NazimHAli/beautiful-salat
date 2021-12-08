<script lang="ts">
    import { PrayerTimes } from "@/utils/PrayerTimes";
    import DisplayMonth from "@/components/DisplayMonth.svelte";
    import SingleBox from "./components/SingleBox.svelte";

    let formattedPrayerTimes = [];
    const ptModule = new PrayerTimes("ISNA");
    const prayerTimes = ptModule.getPrayerTimes(new Date(), [43, -80], -5);

    Object.entries(prayerTimes).forEach((x) => {
        formattedPrayerTimes.push([ptModule.timeNames[x[0]], x[1]]);
    });
</script>

<SingleBox prayerTimes="{formattedPrayerTimes}" />

<br />
<br />
<br />

<DisplayMonth theme="classic" />
