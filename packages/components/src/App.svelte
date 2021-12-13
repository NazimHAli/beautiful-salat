<script lang="ts">
  import { PrayerTimes } from "beautiful-salat";
  import PrayerTimesMonthly from "@/components/PrayerTimesMonthly.svelte";
  import PrayerTimesTableDaily from "@/components/PrayerTimesTableDaily.svelte";

  const ptModule = new PrayerTimes("ISNA");
  const prayerTimes = ptModule.getPrayerTimes(new Date(), [43, -80], -5);
</script>

<PrayerTimesTableDaily prayerTimes={Object.entries(prayerTimes)} />

<PrayerTimesMonthly theme="classic" />
