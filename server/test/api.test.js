import request from "supertest";
import app from "../src/index.js";

describe("API Health Check", () => {
    it("should return a success response from /api/health", async () => {
        const res = await request(app).get("/api/health");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("status", "ok");
    });
});