// "use client";
// import Image from "next/image";
// import CustomButton from "./CustomButton";
// import { useRouter } from "next/navigation";

// type ProductCardProps = {
// 	product: Product;
// };

// export default function ProductCard({ product }: ProductCardProps) {
// 	const router = useRouter();

// 	return (
// 		<div className="relative cursor-pointer">
// 			<div className="">
// 				<div className="h-[300px] w-[300px]">
// 					<Image
// 						src={product.projectImage}
// 						alt="product-image"
// 						className="rounded-lg w-full"
// 					/>
// 				</div>
// 				<CustomButton
// 					btnTitle="View Project"
// 					btnStyles="py-2 px-4 rounded-xl text-white font-semibold border-none bg-customGreen absolute left-6 bottom-15 cursor-pointer"
// 					btnType="button"
// 					btnAction={() => router.push(product.projectLink)}
// 				/>
// 			</div>
// 			<div className="text-customGreen mt-2">
// 				<p className="text-lg font-semibold">{product.projectName}</p>
// 			</div>
// 		</div>
// 	);
// }

"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

type Product = {
	projectImage: string;
	projectName: string;
	projectLink: string;
};

type ProductCardProps = {
	product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
	const router = useRouter();

	return (
		<>
			<div className="relative cursor-pointer group overflow-hidden">
				{/* <div className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg"> */}
				<div className="relative group rounded-lg w-full h-[300px]">
					<Image
						src={product.projectImage}
						alt="product-image"
						layout="fill"
						objectFit="cover"
						className="rounded-lg transition-transform duration-300 group-hover:scale-110"
					/>
				</div>
				<div className="p-4 relative">
					<CustomButton
						btnTitle="View Project"
						btnStyles="py-2 px-4 rounded-xl text-white font-semibold border-none bg-customGreen absolute left-6 bottom-20 cursor-pointer"
						btnType="button"
						btnAction={() => router.push(product.projectLink)}
					/>
					<div className="text-customGreen">
						<p className="text-lg font-semibold">
							{product.projectName}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
