const { test } = require("tap");
const request = require("./request.js");

test("a request function , should throw an error", async (assert) => {
  assert.rejects(() => request("http://error.com"), new Error("network error"));
});

test("a request function , should return a response", async (assert) => {
  const response = await request("http://example.com");
  assert.equal(response.message, "success");
});
