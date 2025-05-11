'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("next-auth/react");
const react_2 = __importDefault(require("react"));
function Providers({ children }) {
    return <react_1.SessionProvider>{children}</react_1.SessionProvider>;
}
exports.default = Providers;
