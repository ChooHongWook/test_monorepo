"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
const signInForm_1 = __importDefault(require("./components/signInForm"));
function Page() {
    return <signInForm_1.default />;
}
