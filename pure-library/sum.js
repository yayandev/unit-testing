function sum(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    throw new Error("invalid arguments");
  }
  return a + b;
}

module.exports = sum;
