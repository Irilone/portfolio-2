
import { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getResponsiveValue = (
  base: string,
  md?: string,
  lg?: string
): string => {
  return [base, md && `md:${md}`, lg && `lg:${lg}`]
    .filter(Boolean)
    .join(" ");
};
