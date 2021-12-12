<script lang="ts">
  import { PrayerTimes } from "@/utils/PrayerTimes";
  import DisplayMonth from "@/components/DisplayMonth.svelte";
  import SingleBox from "./components/SingleBox.svelte";

  const ptModule = new PrayerTimes("ISNA");
  const prayerTimes = ptModule.getPrayerTimes(new Date(), [43, -80], -5);
</script>

<SingleBox prayerTimes={Object.entries(prayerTimes)} />

<br />
<br />
<br />

<DisplayMonth theme="classic" />
