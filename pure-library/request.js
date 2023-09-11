async function request(url) {
  if (url === "http://error.com") {
    throw new Error("network error");
  }

  return {
    message: "success",
  };
}

module.exports = request;
