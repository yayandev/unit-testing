const request = require("../request.js");

describe("request function", () => {
  it("should throw an error", async () => {
    await expect(request("http://error.com")).rejects.toThrow();
  });

  it("should return a response", async () => {
    const response = await request("http://example.com");
    expect(response.message).toBe("success");
  });
});
