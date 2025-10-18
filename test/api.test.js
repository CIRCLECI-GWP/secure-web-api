const request = require("supertest");
const app = require("../server");

describe("API Endpoints", () => {
  test("Health check endpoint", async () => {
    const response = await request(app).get("/health").expect(200);

    expect(response.body).toHaveProperty("status", "healthy");
  });

  test("Users endpoint", async () => {
    const response = await request(app).get("/api/users").expect(200);

    expect(response.body).toHaveProperty("users");
    expect(Array.isArray(response.body.users)).toBe(true);
  });
});
