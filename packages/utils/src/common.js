"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = cn;
const clsx_1 = __importDefault(require("clsx"));
const tailwind_merge_1 = require("tailwind-merge");
/**
 * Utility function to conditionally merge Tailwind CSS class names.
 * @param inputs - Class values to merge.
 * @returns A single string with merged class names.
 */
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.default)(inputs));
}
