const request = require("supertest");
const app = require("../app");

describe("Test the get user", () => {
    test("The result should be an list of user data", done => {
      request(app)
        .post("/generate-token",{"name": "testing"})
        .then(response => {
          expect(response.status).toBe(200);
          done();
        });
    });
  });