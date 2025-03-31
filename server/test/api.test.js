import request from "supertest";
import app from "../src/index";

describe("API Tests", () => {
    it("should return a 200 response", async () => {
        const res = await request(app).get("/api/");
        expect(res.statusCode).toBe(200);
    });
});