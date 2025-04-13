import { ClassValue, clsx } from "clsx";
import { formatDistanceToNow, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDateFormat(date: string) {
  return formatDistanceToNow(parseISO(date), { addSuffix: true });
}
