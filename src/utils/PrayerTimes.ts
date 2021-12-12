import { supportedMethods } from "@/utils/constants";
import { mathHelpers } from "@/utils/mathHelper";
import type {
    typeDefaultParams,
    typeMethods,
    typeSetting,
    typeTimeNames,
} from "@/utils/types";
import { TimeZoneHelpers } from "@/utils/TimeZoneHelpers";

class PrayerTimes {
    timeNames: typeTimeNames;
    methods: typeMethods;
    defaultParams: typeDefaultParams;
    setting: typeSetting;
    offset: {};
    calcMethod: string;
    timeFormat: string;
    timeSuffixes: string[];
    invalidTime: string;
    numIterations: number;
    latitude: number;
    longitude: number;
    elevation: number;
    timeZone: number;
    julianDate: number;
    tzHelpers: TimeZoneHelpers;

    constructor(method = "MWL") {
        this.tzHelpers = new TimeZoneHelpers();

        // Initialize in order
        this.initBaseParameters();
        this.initMethodParameters();

        // settings
        this.calcMethod = this.methods[method] ? method : this.calcMethod;
        let params = this.methods[this.calcMethod].params;

        for (let id in params) {
            this.setting[id] = params[id];
        }

        // time offsets
        for (let i in this.timeNames) {
            this.offset[i] = 0;
        }
    }

    private initMethodParameters() {
        let defParams = this.defaultParams;

        for (let i in this.methods) {
            let params = this.methods[i].params;

            for (let j in defParams) {
                if (typeof params[j] == "undefined") {
                    params[j] = defParams[j];
                }
            }
        }
    }

    private initBaseParameters() {
        this.timeNames = {
            imsak: "Imsak",
            fajr: "Fajr",
            sunrise: "Sunrise",
            dhuhr: "Dhuhr",
            asr: "Asr",
            sunset: "Sunset",
            maghrib: "Maghrib",
            isha: "Isha",
            midnight: "Midnight",
        };

        this.methods = supportedMethods;

        this.defaultParams = {
            maghrib: "0 min",
            midnight: "Standard",
        };

        this.calcMethod = "MWL";

        this.setting = {
            imsak: "10 min",
            dhuhr: "0 min",
            asr: "Standard",
            highLats: "NightMiddle",
            fajr: "",
            maghrib: "",
            isha: "",
            midnight: this.calcMethod,
        };

        this.timeFormat = "24h";
        this.timeSuffixes = ["am", "pm"];
        this.invalidTime = "-----";
        this.numIterations = 1;
        this.offset = {};
    }

    // set calculation method
    setPrayerCalculationMethod(method) {
        if (this.methods[method]) {
            this.adjust(this.methods[method].params);
            this.calcMethod = method;
        }
    }

    // set calculating parameters
    adjust(params) {
        for (let id in params) {
            this.setting[id] = params[id];
        }
    }

    setTimeOffsets(timeOffsets) {
        for (let i in timeOffsets) {
            this.offset[i] = timeOffsets[i];
        }
    }

    getPrayerCalculationMethod() {
        return this.calcMethod;
    }

    getSetting() {
        return this.setting;
    }

    getOffsets() {
        return this.offset;
    }

    // get default calc parametrs
    getDefaults() {
        return this.methods;
    }

    // return prayer times for a given date
    getPrayerTimes(date, coords, timezone = null, dst = "auto", format = null) {
        this.latitude = 1 * coords[0];
        this.longitude = 1 * coords[1];
        this.elevation = coords[2] ? 1 * coords[2] : 0;
        this.timeFormat = format || this.timeFormat;

        if (date.constructor === Date) {
            date = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
        }

        if (!timezone || typeof timezone == "undefined" || timezone == "auto") {
            timezone = this.tzHelpers.getTimeZone(date);
        }

        let resDst;

        if (typeof dst == "undefined" || dst == "auto") {
            resDst = this.tzHelpers.getDst(date);
        } else {
            resDst = dst;
        }

        this.timeZone = 1 * timezone + (1 * resDst ? 1 : 0);
        this.julianDate =
            this.julian(date[0], date[1], date[2]) - this.longitude / (15 * 24);

        return this.computeTimes();
    }

    // compute prayer times
    computeTimes() {
        let times = {
            imsak: 5,
            fajr: 5,
            sunrise: 6,
            dhuhr: 12,
            asr: 13,
            sunset: 18,
            maghrib: 18,
            isha: 18,
        };

        // main iterations
        for (let i = 1; i <= this.numIterations; i++) {
            times = this.computePrayerTimes(times);
        }

        times = this.adjustTimes(times);

        // add midnight time
        //@ts-ignore
        times.midnight =
            this.setting.midnight === "Jafari"
                ? times.sunset + this.timeDiff(times.sunset, times.fajr) / 2
                : times.sunset + this.timeDiff(times.sunset, times.sunrise) / 2;

        times = this.applyOffsetsToPrayerTimes(times);

        return this.formatEachPrayerTime(times);
    }

    // convert times to given time format
    formatEachPrayerTime(times) {
        const formatedTimes = {};

        for (let i in times) {
            formatedTimes[this.timeNames[i]] = this.getFormattedTime(
                times[i],
                this.timeFormat
            );
        }

        return formatedTimes;
    }

    // convert float time to the given format (see timeFormats)
    getFormattedTime(time, format, suffixes = null) {
        if (isNaN(time)) {
            return this.invalidTime;
        }

        if (format == "Float") {
            return time;
        }

        suffixes = suffixes || this.timeSuffixes;

        time = mathHelpers.fixHour(time + 0.5 / 60); // add 0.5 minutes to round

        let hours = Math.floor(time);
        let minutes = Math.floor((time - hours) * 60);
        let suffix = format == "12h" ? suffixes[hours < 12 ? 0 : 1] : "";
        let hour =
            format == "24h"
                ? this.twoDigitsFormat(hours)
                : ((hours + 12 - 1) % 12) + 1;

        return (
            hour +
            ":" +
            this.twoDigitsFormat(minutes) +
            (suffix ? " " + suffix : "")
        );
    }

    // compute mid-day time
    midDay(time) {
        let eqt = this.sunPosition(this.julianDate + time).equation;
        let noon = mathHelpers.fixHour(12 - eqt);

        return noon;
    }

    // compute the time at which sun reaches a specific angle below horizon
    sunAngleTime(angle, time, direction = null) {
        let decl = this.sunPosition(this.julianDate + time).declination;
        let noon = this.midDay(time);
        let t =
            (1 / 15) *
            mathHelpers.arccos(
                (-mathHelpers.sin(angle) -
                    mathHelpers.sin(decl) * mathHelpers.sin(this.latitude)) /
                    (mathHelpers.cos(decl) * mathHelpers.cos(this.latitude))
            );

        return noon + (direction == "ccw" ? -t : t);
    }

    // compute asr time
    asrTime(factor: any, time: any) {
        let decl: any = this.sunPosition(this.julianDate + time).declination;
        let angle: any = -mathHelpers.arccot(
            factor + mathHelpers.tan(Math.abs(this.latitude - decl))
        );
        return this.sunAngleTime(angle, time);
    }

    // compute declination angle of sun and equation of time
    sunPosition(julianDate: number) {
        let D = julianDate - 2451545.0;
        let g = mathHelpers.fixAngle(357.529 + 0.98560028 * D);
        let q = mathHelpers.fixAngle(280.459 + 0.98564736 * D);
        let L = mathHelpers.fixAngle(
            q + 1.915 * mathHelpers.sin(g) + 0.02 * mathHelpers.sin(2 * g)
        );

        let e = 23.439 - 0.00000036 * D;

        let RA =
            mathHelpers.arctan2(
                mathHelpers.cos(e) * mathHelpers.sin(L),
                mathHelpers.cos(L)
            ) / 15;
        let equationOfTime = q / 15 - mathHelpers.fixHour(RA);
        let decl = mathHelpers.arcsin(mathHelpers.sin(e) * mathHelpers.sin(L));

        return { declination: decl, equation: equationOfTime };
    }

    // convert Gregorian date to Julian day
    // Ref: Astronomical Algorithms by Jean Meeus
    julian(year: number, month: number, day: number) {
        if (month <= 2) {
            year -= 1;
            month += 12;
        }

        let A = Math.floor(year / 100);
        let B = 2 - A + Math.floor(A / 4);
        let JD =
            Math.floor(365.25 * (year + 4716)) +
            Math.floor(30.6001 * (month + 1)) +
            day +
            B -
            1524.5;

        return JD;
    }

    // compute prayer times at given julian date
    computePrayerTimes(times) {
        times = this.dayPortion(times);
        let params = this.setting;

        let imsak = this.sunAngleTime(
            this.eval(params.imsak),
            times.imsak,
            "ccw"
        );

        let fajr = this.sunAngleTime(this.eval(params.fajr), times.fajr, "ccw");

        let sunrise = this.sunAngleTime(
            this.riseSetAngle(),
            times.sunrise,
            "ccw"
        );

        let dhuhr = this.midDay(times.dhuhr);
        let asr = this.asrTime(this.asrFactor(params.asr), times.asr);
        let sunset = this.sunAngleTime(this.riseSetAngle(), times.sunset);
        let maghrib = this.sunAngleTime(
            this.eval(params.maghrib),
            times.maghrib
        );

        let isha = this.sunAngleTime(this.eval(params.isha), times.isha);

        return {
            imsak: imsak,
            fajr: fajr,
            sunrise: sunrise,
            dhuhr: dhuhr,
            asr: asr,
            sunset: sunset,
            maghrib: maghrib,
            isha: isha,
            midnight: 0,
        };
    }

    adjustTimes(times) {
        let params = this.setting;

        for (let i in times) {
            times[i] += this.timeZone - this.longitude / 15;
        }

        if (params.highLats != "None") {
            times = this.adjustHighLats(times);
        }

        if (this.isMin(params.imsak)) {
            times.imsak = times.fajr - this.eval(params.imsak) / 60;
        }

        if (this.isMin(params.maghrib)) {
            times.maghrib = times.sunset + this.eval(params.maghrib) / 60;
        }

        if (this.isMin(params.isha)) {
            times.isha = times.maghrib + this.eval(params.isha) / 60;
        }

        times.dhuhr += this.eval(params.dhuhr) / 60;

        return times;
    }

    // get asr shadow factor
    asrFactor(asrParam) {
        let factor = { Standard: 1, Hanafi: 2 }[asrParam];
        return factor || this.eval(asrParam);
    }

    // return sun angle for sunset/sunrise
    riseSetAngle() {
        let angle = 0.0347 * Math.sqrt(this.elevation); // an approximation
        return 0.833 + angle;
    }

    applyOffsetsToPrayerTimes(times) {
        for (let i in times) {
            times[i] += this.offset[i] / 60;
        }

        return times;
    }

    // adjust times for locations in higher latitudes
    adjustHighLats(times: typeTimeNames) {
        let params = this.setting;
        let nightTime = this.timeDiff(times.sunset, times.sunrise);

        times.imsak = this.adjustHLTime(
            times.imsak,
            times.sunrise,
            this.eval(params.imsak),
            nightTime,
            "ccw"
        );

        times.fajr = this.adjustHLTime(
            times.fajr,
            times.sunrise,
            this.eval(params.fajr),
            nightTime,
            "ccw"
        );

        times.isha = this.adjustHLTime(
            times.isha,
            times.sunset,
            this.eval(params.isha),
            nightTime
        );

        times.maghrib = this.adjustHLTime(
            times.maghrib,
            times.sunset,
            this.eval(params.maghrib),
            nightTime
        );

        return times;
    }

    // adjust a time for higher latitudes
    adjustHLTime(time, base, angle, night, direction = null) {
        let portion = this.nightPortion(angle, night);
        let timeDiff =
            direction == "ccw"
                ? this.timeDiff(time, base)
                : this.timeDiff(base, time);

        if (isNaN(time) || timeDiff > portion) {
            time = base + (direction == "ccw" ? -portion : portion);
        }

        return time;
    }

    // the night portion used for adjusting times in higher latitudes
    nightPortion(angle, night) {
        let method = this.setting.highLats;
        let portion = 1 / 2; // MidNight

        if (method == "AngleBased") {
            portion = (1 / 60) * angle;
        }
        if (method == "OneSeventh") {
            portion = 1 / 7;
        }

        return portion * night;
    }

    // convert hours to day portions
    dayPortion(times) {
        for (let i in times) {
            times[i] /= 24;
        }

        return times;
    }

    // convert given string into a number
    eval(str) {
        //@ts-ignore
        return 1 * (str + "").split(/[^0-9.+-]/)[0];
    }

    // detect if input contains 'min'
    isMin(arg) {
        return (arg + "").indexOf("min") != -1;
    }

    // compute the difference between two times
    timeDiff(time1, time2) {
        return mathHelpers.fixHour(time2 - time1);
    }

    // add a leading 0 if necessary
    twoDigitsFormat(num) {
        return num < 10 ? "0" + num : num;
    }
}

export { PrayerTimes };
