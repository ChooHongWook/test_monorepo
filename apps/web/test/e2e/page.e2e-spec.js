"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe("Root page", () => {
    (0, test_1.test)("should reach the home page", async ({ page }) => {
        const response = await page.request.get("/");
        await (0, test_1.expect)(response).toBeOK();
    });
});
