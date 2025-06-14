import Image from "next/image";
import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/landing-page/navbar/Navbar";
import {
	Health1,
	Health2,
	Health3,
	Health4,
	Merchant1,
	Merchant2,
	Merchant3,
	Merchant4,
} from "@/assets/images";

export default function Merchant() {
	return (
		<div className="h-auto w-full">
			<Navbar />
			<div className="w-full bg-customOffWhite px-8 md:px-16 pt-[150px] md:pt-[200px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-10">
				<div className="w-full flex items-center justify-around">
					<div className="w-full md:w-[60%] flex flex-col text-center gap-2 items-center text-customBlack">
						<h2 className="text-[50px] font-bold">
							Where Merchants Thrive — Easy Setup, Smart Tools,
							Real Results.
						</h2>
						<p className="text-lg leading-7 font-medium">
							An all-in-one e-commerce platform that helps
							merchants easily launch, manage, and grow their
							online store with powerful tools and seamless
							payment solutions.
						</p>
					</div>
				</div>
			</div>
			<div className="w-full bg-white px-8 md:px-16 pt-[100px] pb-20 flex flex-col gap-10">
				<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
					<div className="w-full md:w-1/2">
						<p className="text-lg leading-7 font-medium">
							The merchant landing page is designed to attract new
							sellers by showcasing the benefits of joining the
							platform. It features a clear headline, strong
							call-to-action, and sections highlighting key
							benefits, how the platform works, and merchant
							success stories. The layout is clean, persuasive,
							and optimized for conversions, guiding users to sign
							up with ease.
						</p>
					</div>
					<div className="w-full md:w-1/2 flex justify-end">
						<Image src={Merchant1} alt="e-commerce" />
					</div>
				</div>
			</div>
			<div className="w-full bg-white px-8 md:px-16 pt-[100px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-20">
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image src={Merchant2} alt="e-commerce" />
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start text-customBlack">
						<h2 className="text-lg font-medium">
							This merchant sign-up flow is designed to provide a
							seamless onboarding experience for business owners.
							It guides users through key steps including account
							creation, business information, document
							verification, and payment setup. The interface is
							clean and intuitive, with a step-by-step structure,
							helpful prompts, and responsive design to ensure
							ease of use across devices. The goal is to simplify
							the registration process while collecting all
							necessary information for smooth merchant
							activation.
						</h2>
					</div>
				</div>
			</div>
			<div className="w-full bg-customOffWhite px-8 md:px-16 pt-[100px] pb-20 flex flex-col gap-10">
				<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
					<div className="w-full md:w-1/2">
						<p className="text-lg leading-7 font-medium">
							The merchant dashboard is designed to give sellers a
							clear, real-time overview of their business
							performance and operations. It features key metrics
							such as total sales, orders, revenue, product
							inventory, and customer activity. Merchants can
							easily manage products, track orders, handle
							payouts, and respond to customer queries—all from a
							centralized interface. <br /> The layout is clean
							and data-driven, with visual elements like charts,
							tables, and status indicators for quick insights.
							Navigation is intuitive, with dedicated sections for
							inventory management, Sales & Revenue,POS and
							settings. The goal is to empower merchants to make
							informed decisions and manage their store
							efficiently from one place.
						</p>
					</div>
					<div className="w-full md:w-1/2 flex justify-end">
						<Image src={Merchant3} alt="e-commerce" />
					</div>
				</div>
			</div>
			<div className="w-full bg-white px-8 md:px-16 pt-[100px] pb-20 flex flex-col gap-10">
				<div className="flex flex-col items-center gap-10 md:gap-20">
					<div className="w-full md:w-[80%] flex justify-around">
						<Image src={Merchant4} alt="e-commerce" />
					</div>
					<div className="w-[80%]">
						<p className="text-lg leading-7 font-medium text-center">
							The POS interface is designed for fast, efficient
							in-store transactions, allowing merchants to manage
							sales, track inventory, and accept multiple payment
							methods in real time. The layout prioritizes speed
							and usability, with a clear product catalog,
							searchable listings, cart summary, and quick-access
							buttons for discounts, taxes, and payment types.
							<br /> The POS also supports receipt generation, and
							customer tracking for loyalty programs. The goal is
							to streamline checkout processes while providing
							merchants with full control and visibility over
							their in-store sales operations.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
