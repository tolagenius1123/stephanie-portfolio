import { Product1, Product2, Product3, Product4 } from "@/assets/images";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const projects: Product[] = [
	{
		projectId: 1,
		projectName: "E-commerce",
		projectImage: Product1,
		projectLink: "/e-commerce",
	},
	{
		projectId: 2,
		projectName: "Gift Voucher Solution",
		projectImage: Product2,
		projectLink: "/gift-voucher",
	},
	{
		projectId: 3,
		projectName: "Health Care System",
		projectImage: Product3,
		projectLink: "/health-care",
	},
	{
		projectId: 4,
		projectName: "E-commerce Merchant",
		projectImage: Product4,
		projectLink: "/merchant",
	},
];
