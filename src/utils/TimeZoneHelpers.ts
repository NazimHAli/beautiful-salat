export class TimeZoneHelpers {
    // get local time zone
    getTimeZone(date: any[]) {
        let year = date[0];
        let t1 = this.gmtOffset([year, 0, 1]);
        let t2 = this.gmtOffset([year, 6, 1]);

        return Math.min(t1, t2);
    }

    // get daylight saving for a given date
    getDst(date: any[]) {
        // @ts-ignore
        return 1 * (this.gmtOffset(date) != this.getTimeZone(date));
    }

    // GMT offset for a given date
    gmtOffset(date) {
        let localDate = new Date(date[0], date[1] - 1, date[2], 12, 0, 0, 0);
        let GMTString = localDate.toUTCString();
        let GMTDate = new Date(
            GMTString.substring(0, GMTString.lastIndexOf(" ") - 1)
        );

        // @ts-ignore
        let hoursDiff = (localDate - GMTDate) / (1000 * 60 * 60);

        return hoursDiff;
    }
}
