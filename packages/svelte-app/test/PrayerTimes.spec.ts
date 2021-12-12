import { PrayerTimes } from "@/utils/PrayerTimes";

describe("Prayer times calculation methods", () => {
    let prayerTime, calculatedTimes, expectedTimes;

    describe("MWL: Muslim World League", () => {
        beforeEach(() => {
            prayerTime = new PrayerTimes("MWL");
        });

        test("should return correct times", () => {
            calculatedTimes = prayerTime.getPrayerTimes(
                new Date("1995-12-17T13:24:00"),
                [43, -80],
                -5
            );

            expectedTimes = {
                Imsak: "05:53",
                Fajr: "06:03",
                Sunrise: "07:45",
                Dhuhr: "12:16",
                Asr: "14:29",
                Sunset: "16:47",
                Maghrib: "16:47",
                Isha: "18:24",
                Midnight: "00:16",
            };

            expect(calculatedTimes).toEqual(expectedTimes);
        });
    });

    describe("ISNA: Islamic Society of North America", () => {
        beforeEach(() => {
            prayerTime = new PrayerTimes("ISNA");
        });

        test("should return correct times", () => {
            calculatedTimes = prayerTime.getPrayerTimes(
                new Date("1995-12-17T13:24:00"),
                [43, -80],
                -5
            );

            expectedTimes = {
                Imsak: "06:10",
                Fajr: "06:20",
                Sunrise: "07:45",
                Dhuhr: "12:16",
                Asr: "14:29",
                Sunset: "16:47",
                Maghrib: "16:47",
                Isha: "18:12",
                Midnight: "00:16",
            };

            expect(calculatedTimes).toEqual(expectedTimes);
        });
    });

    describe("Egypt: Egyptian General Authority of Survey", () => {
        beforeEach(() => {
            prayerTime = new PrayerTimes("Egypt");
        });

        test("should return correct times", () => {
            calculatedTimes = prayerTime.getPrayerTimes(
                new Date("1995-12-17T13:24:00"),
                [43, -80],
                -5
            );

            expectedTimes = {
                Imsak: "05:44",
                Fajr: "05:54",
                Sunrise: "07:45",
                Dhuhr: "12:16",
                Asr: "14:29",
                Sunset: "16:47",
                Maghrib: "16:47",
                Isha: "18:26",
                Midnight: "00:16",
            };

            expect(calculatedTimes).toEqual(expectedTimes);
        });
    });

    describe("Makkah: Umm Al-Qura University, Makkah", () => {
        beforeEach(() => {
            prayerTime = new PrayerTimes("Makkah");
        });

        test("should return correct times", () => {
            calculatedTimes = prayerTime.getPrayerTimes(
                new Date("1995-12-17T13:24:00"),
                [43, -80],
                -5
            );

            expectedTimes = {
                Imsak: "05:50",
                Fajr: "06:00",
                Sunrise: "07:45",
                Dhuhr: "12:16",
                Asr: "14:29",
                Sunset: "16:47",
                Maghrib: "16:47",
                Isha: "18:17",
                Midnight: "00:16",
            };

            expect(calculatedTimes).toEqual(expectedTimes);
        });
    });

    describe("Karachi: University of Islamic Sciences, Karachi", () => {
        beforeEach(() => {
            prayerTime = new PrayerTimes("Karachi");
        });

        test("should return correct times", () => {
            calculatedTimes = prayerTime.getPrayerTimes(
                new Date("1995-12-17T13:24:00"),
                [43, -80],
                -5
            );

            expectedTimes = {
                Imsak: "05:53",
                Fajr: "06:03",
                Sunrise: "07:45",
                Dhuhr: "12:16",
                Asr: "14:29",
                Sunset: "16:47",
                Maghrib: "16:47",
                Isha: "18:29",
                Midnight: "00:16",
            };

            expect(calculatedTimes).toEqual(expectedTimes);
        });
    });

    describe("Tehran: Institute of Geophysics, University of Tehran", () => {
        beforeEach(() => {
            prayerTime = new PrayerTimes("Tehran");
        });

        test("should return correct times", () => {
            calculatedTimes = prayerTime.getPrayerTimes(
                new Date("1995-12-17T13:24:00"),
                [43, -80],
                -5
            );

            expectedTimes = {
                Imsak: "05:54",
                Fajr: "06:04",
                Sunrise: "07:45",
                Dhuhr: "12:16",
                Asr: "14:29",
                Sunset: "16:47",
                Maghrib: "17:10",
                Isha: "18:06",
                Midnight: "23:25",
            };

            expect(calculatedTimes).toEqual(expectedTimes);
        });
    });

    describe("Jafari: Shia Ithna-Ashari, Leva Institute, Qum", () => {
        beforeEach(() => {
            prayerTime = new PrayerTimes("Jafari");
        });

        test("should return correct times", () => {
            calculatedTimes = prayerTime.getPrayerTimes(
                new Date("1995-12-17T13:24:00"),
                [43, -80],
                -5
            );

            expectedTimes = {
                Imsak: "06:04",
                Fajr: "06:14",
                Sunrise: "07:45",
                Dhuhr: "12:16",
                Asr: "14:29",
                Sunset: "16:47",
                Maghrib: "17:07",
                Isha: "18:06",
                Midnight: "23:30",
            };

            expect(calculatedTimes).toEqual(expectedTimes);
        });
    });
});
