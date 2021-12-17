<script lang="ts">
  import { PrayerTimes } from "@beautiful-salat/js-lib";
  import PrayerTimesMonthly from "@/components/PrayerTimesMonthly.svelte";
  import PrayerTimesDaily from "@/components/PrayerTimesDaily.svelte";

  const ptModule = new PrayerTimes("ISNA");
  const prayerTimes = ptModule.getPrayerTimes(new Date(), [43, -80], -5);
  const monthly = ptModule.getMonthTable([43, -80], 0, -5);
</script>

<div class="flex flex-wrap">
  <PrayerTimesDaily {prayerTimes} />
  <PrayerTimesDaily theme="theme-blue" {prayerTimes} />
  <PrayerTimesDaily theme="theme-red" {prayerTimes} />
  <PrayerTimesDaily theme="theme-gray" {prayerTimes} />
  <PrayerTimesDaily theme="theme-dark-blue" {prayerTimes} />
  <PrayerTimesMonthly maxRows={5} prayerTimes={monthly} />
  <PrayerTimesMonthly maxRows={5} theme="theme-dark-blue" prayerTimes={monthly} />
</div>
