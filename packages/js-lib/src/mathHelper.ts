export const mathHelpers = {
  convertDegreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180.0;
  },
  convertRadiansToDegrees(radians: number): number {
    return (radians * 180.0) / Math.PI;
  },
  sine(x: number): number {
    return Math.sin(this.convertDegreesToRadians(x));
  },
  cosine(x: number): number {
    return Math.cos(this.convertDegreesToRadians(x));
  },
  tangent(x: number): number {
    return Math.tan(this.convertDegreesToRadians(x));
  },
  arcsine(x: number): number {
    return this.convertRadiansToDegrees(Math.asin(x));
  },
  arccosine(x: number): number {
    return this.convertRadiansToDegrees(Math.acos(x));
  },
  arctangent(x: number): number {
    return this.convertRadiansToDegrees(Math.atan(x));
  },
  arccotangent(x: number): number {
    return this.convertRadiansToDegrees(Math.atan(1 / x));
  },
  arctangent2(y: number, x: number): number {
    return this.convertRadiansToDegrees(Math.atan2(y, x));
  },
  fixAngle(angle: number): number {
    return this.fix(angle, 360);
  },
  fixHour(hour: number): number {
    return this.fix(hour, 24);
  },
  fix(numberToFix: number, base: number): number {
    const remainder = numberToFix % base;
    return remainder < 0 ? remainder + base : remainder;
  },
};
