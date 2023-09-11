const { test } = require("tap");
const sum = require("./sum.js");
test("sum works", async (assert) => {
  assert.equal(sum(1, 2), 3);
});

test("sum throws", async (assert) => {
  assert.throws(() => sum(1, "2"), new Error("invalid arguments"));
});
