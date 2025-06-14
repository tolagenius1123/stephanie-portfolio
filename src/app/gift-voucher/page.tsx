import Image from "next/image";
import Navbar from "@/components/landing-page/navbar/Navbar";
import { Gift1, Gift2, Gift3, Gift4 } from "@/assets/images";
import Footer from "@/components/landing-page/Footer";

export default function GiftVoucher() {
	return (
		<div className="h-auto w-full">
			<Navbar />
			<div className="w-full bg-customOffWhite px-8 md:px-16 pt-[150px] md:pt-[200px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-10">
				<div className="w-full flex items-center justify-around">
					<div className="w-full md:w-[60%] flex flex-col text-center gap-2 items-center text-customBlack">
						<h2 className="text-[50px] font-bold">
							Smart Payments. Zero Hassle.
						</h2>
						<p className="text-lg leading-7 font-medium">
							A bill payment app that simplifies how users pay and
							manage their bills—offering fast, secure
							transactions and a seamless payment experience
						</p>
					</div>
				</div>
			</div>
			<div className="w-full bg-white px-8 md:px-16 pt-[100px] pb-20 flex flex-col gap-10">
				<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
					<div className="w-full md:w-1/2">
						<p className="text-lg leading-7 font-medium">
							The home screen of a bill payment app is designed
							for quick access and ease of use. It features a
							clear dashboard where users can see promotional
							banners displaying latest discount, access common
							bill categories (electricity, data, TV, bettings,
							etc.), and make payments with just a few taps. With
							intuitive navigation, smart icons, and personalized
							prompts, users can manage bills effortlessly and
							stay on top of their payments.
						</p>
					</div>
					<div className="w-full md:w-1/2 flex justify-end">
						<Image src={Gift1} alt="e-commerce" />
					</div>
				</div>
			</div>
			<div className="w-full bg-customOffWhite px-8 md:px-16 pt-[150px] md:pt-[200px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-20">
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image src={Gift2} alt="e-commerce" />
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start text-customBlack">
						<h2 className="text-lg font-medium">
							The splash/onboarding screens are designed to
							introduce users to the app’s core features in a
							clear and engaging way. Each screen highlights a key
							benefit—such as fast bill payments, secure
							transactions, and transaction history tracking—using
							simple illustrations and brief text. This onboarding
							flow helps users quickly understand the app’s value
							and how to use it effectively, creating a smooth
							first-time experience.
						</h2>
					</div>
				</div>
			</div>
			<div className="w-full bg-white px-8 md:px-16 pt-[100px] pb-20 flex flex-col gap-10">
				<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-20">
					<div className="w-full md:w-1/2">
						<p className="text-lg leading-7 font-medium">
							This app features both light and dark mode options
							to enhance user comfort and accessibility. Light
							mode provides a clean, professional look ideal for
							daytime use, while dark mode reduces eye strain and
							conserves battery during low-light conditions. Both
							themes are designed with clarity and precision,
							ensuring that financial data, charts, and key
							actions remain readable and visually
							consistent—delivering a seamless and user-friendly
							experience across all environments.
						</p>
					</div>
					<div className="w-full md:w-1/2 flex justify-end gap-3">
						<Image src={Gift3} alt="e-commerce" />
						<Image src={Gift4} alt="e-commerce" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
