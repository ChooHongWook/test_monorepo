"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const base_1 = require("./base");
exports.config = {
    ...base_1.config,
    rootDir: "src",
    testRegex: ".*\\.spec\\.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    collectCoverageFrom: ["**/*.(t|j)s"],
    coverageDirectory: "../coverage",
    testEnvironment: "node",
};
