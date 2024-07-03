import { mathHelpers } from "../src/mathHelper";

describe("mathHelpers", () => {
  test("convertDegreesToRadians", () => {
    expect(mathHelpers.convertDegreesToRadians(90)).toBe(Math.PI / 2);
  });

  test("convertRadiansToDegrees", () => {
    expect(mathHelpers.convertRadiansToDegrees(Math.PI / 2)).toBe(90);
  });

  test("sine", () => {
    expect(mathHelpers.sine(60)).toEqual(0.8660254037844386);
  });

  test("cosine", () => {
    expect(mathHelpers.cosine(60)).toBeCloseTo(0.5);
  });

  test("tangent", () => {
    expect(mathHelpers.tangent(60)).toBeCloseTo(1.732);
  });

  test("arcsine", () => {
    expect(mathHelpers.arcsine(0.5)).toEqual(30.000000000000004);
  });

  test("arccosine", () => {
    expect(mathHelpers.arccosine(0.5)).toBeCloseTo(60);
  });

  test("arctangent", () => {
    expect(mathHelpers.arctangent(0.5)).toBeCloseTo(26.565);
  });

  test("arccotangent", () => {
    expect(mathHelpers.arccotangent(0.5)).toEqual(63.43494882292201);
  });

  test("arctangent2", () => {
    expect(mathHelpers.arctangent2(1, 1)).toEqual(45);
  });

  test("fixAngle", () => {
    expect(mathHelpers.fixAngle(361)).toBe(1);
  });

  test("fixHour", () => {
    expect(mathHelpers.fixHour(26)).toBe(2);
  });

  test("fix", () => {
    expect(mathHelpers.fix(27, 10)).toBe(7);
  });
});
