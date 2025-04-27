import clsx from "clsx";
import { ClassValue, clsx as clsxType } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to conditionally merge Tailwind CSS class names.
 * @param inputs - Class values to merge.
 * @returns A single string with merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
