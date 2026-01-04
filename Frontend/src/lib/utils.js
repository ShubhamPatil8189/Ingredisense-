import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes efficiently without style conflicts.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}