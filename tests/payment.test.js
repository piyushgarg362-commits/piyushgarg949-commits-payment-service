const request = require("supertest");

const app = require("../src/app");

describe("Payment Service", () => {

  test("Health endpoint", async () => {
    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);
  });

  test("Get payments", async () => {
    const response = await request(app)
      .get("/payments");

    expect(response.statusCode).toBe(200);
  });

});
