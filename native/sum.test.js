const assert = require("assert");
const sum = require("./sum.js");

assert.equal(sum(1, 2), 3);
assert.throws(() => sum(1, "2"), new Error("invalid arguments"));
