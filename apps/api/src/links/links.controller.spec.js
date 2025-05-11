"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const testing_1 = require("@nestjs/testing");
const links_controller_1 = require("./links.controller");
const links_service_1 = require("./links.service");
(0, globals_1.describe)("LinksController", () => {
    let controller;
    (0, globals_1.beforeEach)(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [links_controller_1.LinksController],
            providers: [links_service_1.LinksService],
        }).compile();
        controller = module.get(links_controller_1.LinksController);
    });
    (0, globals_1.it)("should be defined", () => {
        (0, globals_1.expect)(controller).toBeDefined();
    });
});
