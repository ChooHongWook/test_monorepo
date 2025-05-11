"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const react_1 = require("@testing-library/react");
const page_1 = __importDefault(require("../app/page"));
window.fetch = globals_1.jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => [],
}));
(0, globals_1.describe)("Root page", () => {
    const { container, unmount } = (0, react_1.render)(<page_1.default params={{ forTest: true }}/>);
    (0, globals_1.it)("should match the snapshot", () => {
        (0, globals_1.expect)(container).toMatchSnapshot();
    });
    (0, globals_1.it)("should have the correct tree parent", () => {
        (0, globals_1.expect)(container).toBeInstanceOf(HTMLDivElement);
    });
    (0, globals_1.afterAll)(() => {
        unmount();
    });
});
