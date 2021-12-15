<script lang="ts">
  import { PrayerTimes } from "@beautiful-salat/js-lib";
  import PrayerTimesMonthly from "@/components/PrayerTimesMonthly.svelte";
  import PrayerTimesDaily from "@/components/PrayerTimesDaily.svelte";

  const ptModule = new PrayerTimes("ISNA");
  const prayerTimes = ptModule.getPrayerTimes(new Date(), [43, -80], -5);
  const monthly = ptModule.getMonthTable([43, -80], 0, -5);
</script>

<PrayerTimesDaily prayerTimes={Object.entries(prayerTimes)} />

<PrayerTimesMonthly theme="dark" calculatedPrayerTimes={monthly} />
