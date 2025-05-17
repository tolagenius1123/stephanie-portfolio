import { Ecom1, Ecom2, Ecom3, Ecom4 } from "@/assets/images";
import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/landing-page/navbar/Navbar";
import Image from "next/image";

export default function ECommerce() {
	return (
		<div className="h-auto w-full">
			<Navbar />
			<div className="w-full bg-white px-8 md:px-16 pt-[150px] md:pt-[200px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-10">
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start text-customBlack">
						<h2 className="text-[50px] md:text-[60px] font-bold">
							Discover. Shop. Enjoy!
						</h2>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<p>
						An e-commerce platform that combines great deals,
						quality products, and tailored services to enhance the
						shopping experience
					</p>
				</div>
			</div>
			<div className="w-full bg-customOffWhite px-8 md:px-16 pt-[100px] pb-20 flex flex-col gap-10">
				<div className="flex justify-around items-center">
					<Image src={Ecom1} alt="e-commerce" />
				</div>
				<div className="flex flex-col md:flex-row justify-between items-center">
					<Image src={Ecom2} alt="e-commerce" />
					<div className="">
						<Image
							src={Ecom3}
							alt="e-commerce"
							className="w-full"
						/>
					</div>
				</div>
			</div>
			<div className="w-full bg-white px-8 md:px-16 pt-[150px] md:pt-[200px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-10">
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start text-customBlack">
						<h2 className="text-xl  font-semibold">
							Sell & render services with confidence, design with
							purpose elevating e-commerce for merchants who want
							more
						</h2>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image src={Ecom4} alt="e-commerce" />
				</div>
			</div>
			<div className="w-full bg-white py-10 flex justify-around px-5">
				<div className="border-[2px] border-grey h-[300px] w-auto md:w-[900px] px-10 md:px-20 py-5 rounded-[50px] flex items-center justify-around">
					<p className="text-customGreen text-xl md:text-[32px] text-center font-semibold">
						&quot;Crafting a powerful e-commerce experiences
						seamlessly connecting deals, products, and services for
						maximum impact.&quot;
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
