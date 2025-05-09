"use client";
import { Product1 } from "@/assets/images";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

type ProductCardProps = {
	product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
	const router = useRouter();
	console.log(product);

	return (
		<div className="relative">
			<div className="">
				<div className="">
					<Image
						src={product.projectImage}
						alt="product-image"
						className="rounded-lg w-full"
					/>
				</div>
				<CustomButton
					btnTitle="View Project"
					btnStyles="py-2 px-4 rounded-xl text-white font-semibold border-[2px] border-white absolute left-6 bottom-24 cursor-pointer"
					btnType="button"
					btnAction={() => router.push(product.projectLink)}
				/>
			</div>
			<div className="text-customGreen mt-3">
				<h2 className="text-2xl font-bold">Product</h2>
				<p className="">{product.projectName}</p>
			</div>
		</div>
	);
}
