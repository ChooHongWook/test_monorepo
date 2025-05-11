"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const layout_1 = require("../app/layout");
(0, globals_1.describe)("Root layout", () => {
    (0, globals_1.describe)("metadata", () => {
        (0, globals_1.it)("should be exported", () => {
            (0, globals_1.expect)(layout_1.metadata).toBeDefined();
        });
        (0, globals_1.it)("should contain a `title` and `description`", () => {
            (0, globals_1.expect)(layout_1.metadata).toHaveProperty("title");
            (0, globals_1.expect)(layout_1.metadata).toHaveProperty("description");
        });
    });
});
