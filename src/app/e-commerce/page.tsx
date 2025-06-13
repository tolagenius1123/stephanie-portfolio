import { Ecom1, Ecom2, Ecom3 } from "@/assets/images";
import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/landing-page/navbar/Navbar";
import Image from "next/image";

export default function ECommerce() {
	return (
		<div className="h-auto w-full">
			<Navbar />
			<div className="w-full bg-customOffWhite px-8 md:px-16 pt-[150px] md:pt-[200px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-10">
				<div className="w-full flex items-center justify-around">
					<div className="w-full md:w-[60%] flex flex-col text-center gap-2 items-center text-customBlack">
						<h2 className="text-[50px] font-bold">
							Discover. Shop. Enjoy!
						</h2>
						<p className="text-lg leading-7 font-medium">
							An e-commerce platform that combines great deals,
							quality products, and tailored services to enhance
							the shopping experience
						</p>
					</div>
				</div>
			</div>
			<div className="w-full bg-white px-8 md:px-16 pt-[100px] pb-20 flex flex-col gap-10">
				<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
					<div className="w-full md:w-1/2">
						<p className="text-lg leading-7 font-medium">
							The product detail screen is designed to provide
							shoppers with all the essential information they
							need to make confident purchasing decisions. It
							features a high-quality product image gallery, a
							clear product title, price, ratings, and a concise
							description. Key actions such as “Add to Cart” or
							“Buy Now” are prominently displayed for easy access.
							<br />
							Additional details like size or color options, stock
							availability, delivery info, return policy, seller
							performance and customer reviews are well-organized
							to enhance the user experience. The layout is clean
							and responsive, ensuring a seamless experience
							across mobile and desktop. <br /> This screen
							balances visual appeal with functionality,
							supporting both product discovery and conversion.
						</p>
					</div>
					<div className="w-full md:w-1/2">
						<Image src={Ecom1} alt="e-commerce" />
					</div>
				</div>
			</div>
			<div className="w-full px-8 md:px-16 pt-[100px] pb-20 gap-10 md:gap-20 bg-customOffWhite flex flex-col md:flex-row justify-between items-center">
				<div className="w-full md:w-1/2">
					<Image src={Ecom2} alt="e-commerce" />
				</div>
				<div className="w-full md:w-1/2">
					<p className="text-lg leading-7 font-medium">
						A seamless e-commerce shopping experience featuring
						product cards for easy browsing, categorized listings
						for quick discovery, a user-friendly add-to-cart screen,
						and a wishlist for saving favorites—all designed to
						enhance convenience and drive engagement
					</p>
				</div>
			</div>
			<div className="w-full bg-white px-8 md:px-16 pt-[100px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-10">
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start text-customBlack">
						<h2 className="text-lg leading-7 font-medium">
							A dedicated warranty portal that allows users to
							easily submit claims for defective devices within
							the warranty coverage period. The flow is simple and
							intuitive—guiding users through device verification,
							issue reporting, and claim submission—ensuring a
							smooth and transparent support experience.
						</h2>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image src={Ecom3} alt="e-commerce" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
