export const mathHelpers = {
    dtr(d: number) {
        return (d * Math.PI) / 180.0;
    },
    rtd(r: number) {
        return (r * 180.0) / Math.PI;
    },
    sin(d: number) {
        return Math.sin(this.dtr(d));
    },
    cos(d: number) {
        return Math.cos(this.dtr(d));
    },
    tan(d: number) {
        return Math.tan(this.dtr(d));
    },

    arcsin(d: number) {
        return this.rtd(Math.asin(d));
    },
    arccos(d: number) {
        return this.rtd(Math.acos(d));
    },
    arctan(d: number) {
        return this.rtd(Math.atan(d));
    },

    arccot(x: number) {
        return this.rtd(Math.atan(1 / x));
    },
    arctan2(y: number, x: number) {
        return this.rtd(Math.atan2(y, x));
    },

    fixAngle(a: number) {
        return this.fix(a, 360);
    },
    fixHour(a: number) {
        return this.fix(a, 24);
    },

    fix(a: number, b: number) {
        a = a - b * Math.floor(a / b);
        return a < 0 ? a + b : a;
    },
};
