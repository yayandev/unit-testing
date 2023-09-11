const sum = require("../sum.js");
describe("sum function", () => {
  it("should throw an error", () => {
    expect(() => sum(1, "2")).toThrow();
    expect(() => sum("2", 3)).toThrow();
  });
  it("should return the sum", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
  });
});
