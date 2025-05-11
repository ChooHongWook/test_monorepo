"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const testing_1 = require("@nestjs/testing");
const links_service_1 = require("./links.service");
(0, globals_1.describe)("LinksService", () => {
    let service;
    (0, globals_1.beforeEach)(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [links_service_1.LinksService],
        }).compile();
        service = module.get(links_service_1.LinksService);
    });
    (0, globals_1.it)("should be defined", () => {
        (0, globals_1.expect)(service).toBeDefined();
    });
});
