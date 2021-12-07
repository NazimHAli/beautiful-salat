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
                imsak: "05:53",
                fajr: "06:03",
                sunrise: "07:45",
                dhuhr: "12:16",
                asr: "14:29",
                sunset: "16:47",
                maghrib: "16:47",
                isha: "18:24",
                midnight: "00:16",
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
                imsak: "06:10",
                fajr: "06:20",
                sunrise: "07:45",
                dhuhr: "12:16",
                asr: "14:29",
                sunset: "16:47",
                maghrib: "16:47",
                isha: "18:12",
                midnight: "00:16",
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
                imsak: "05:44",
                fajr: "05:54",
                sunrise: "07:45",
                dhuhr: "12:16",
                asr: "14:29",
                sunset: "16:47",
                maghrib: "16:47",
                isha: "18:26",
                midnight: "00:16",
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
                imsak: "05:50",
                fajr: "06:00",
                sunrise: "07:45",
                dhuhr: "12:16",
                asr: "14:29",
                sunset: "16:47",
                maghrib: "16:47",
                isha: "18:17",
                midnight: "00:16",
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
                imsak: "05:53",
                fajr: "06:03",
                sunrise: "07:45",
                dhuhr: "12:16",
                asr: "14:29",
                sunset: "16:47",
                maghrib: "16:47",
                isha: "18:29",
                midnight: "00:16",
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
                imsak: "05:54",
                fajr: "06:04",
                sunrise: "07:45",
                dhuhr: "12:16",
                asr: "14:29",
                sunset: "16:47",
                maghrib: "17:10",
                isha: "18:06",
                midnight: "23:25",
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
                imsak: "06:04",
                fajr: "06:14",
                sunrise: "07:45",
                dhuhr: "12:16",
                asr: "14:29",
                sunset: "16:47",
                maghrib: "17:07",
                isha: "18:06",
                midnight: "23:30",
            };

            expect(calculatedTimes).toEqual(expectedTimes);
        });
    });
});
