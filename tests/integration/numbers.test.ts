import "../../src/setup";

import supertest from "supertest";
import { app } from "../../src/app";

describe("GET /numbers", () => {
    it("should return an array of numbers", async () => {
        
        const response = await supertest(app).get("/numbers");

        setTimeout(() => {
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.any(Number)
                ])
            );
        }, 500);
    });
});