import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import path from "path";

export const CONTENT_ROOT = path.resolve(
    process.cwd(),
    "src/content"
);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}