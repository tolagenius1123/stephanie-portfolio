import Image from "next/image";
import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/landing-page/navbar/Navbar";
import { Health1, Health2, Health3, Health4 } from "@/assets/images";

export default function HealthCare() {
	return (
		<div className="h-auto w-full">
			<Navbar />
			<div className="w-full bg-customOffWhite px-8 md:px-16 pt-[150px] md:pt-[200px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-10">
				<div className="w-full flex items-center justify-around">
					<div className="w-full md:w-[60%] flex flex-col text-center gap-2 items-center text-customBlack">
						<h2 className="text-[50px] font-bold">
							Find Care. Access Services. Live Well!
						</h2>
						<p className="text-lg leading-7 font-medium">
							A digital healthcare platform offering convenient
							access to quality medical care through easy
							appointment booking and personalized health
							services.
						</p>
					</div>
				</div>
			</div>
			<div className="w-full bg-white px-8 md:px-16 pt-[100px] pb-20 flex flex-col gap-10">
				<div className="flex justify-around items-center">
					<Image src={Health1} alt="e-commerce" />
				</div>
				<div className="flex flex-col md:flex-row justify-between items-center gap-10">
					<div className="w-full md:w-1/2">
						<Image src={Health2} alt="e-commerce" />
					</div>
					<div className="w-full md:w-1/2">
						<Image src={Health3} alt="e-commerce" />
					</div>
				</div>
			</div>
			<div className="w-full bg-customOffWhite px-8 md:px-16 pt-[150px] md:pt-[200px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-10">
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start text-customBlack">
						<h2 className="text-xl  font-semibold">
							Easily schedule an appointment with a qualified
							doctor in just a few steps no long waits, no
							complicated processes. Whether it&apos;s for a
							routine check-up or a specific health concern,
							getting the care you need has never been quicker or
							more convenient.
						</h2>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex items-center justify-center">
					<Image src={Health4} alt="e-commerce" />
				</div>
			</div>
			<div className="w-full bg-white py-10 flex justify-around px-5">
				<div className="border-[2px] border-grey h-[300px] w-auto md:w-[900px] px-10 md:px-20 py-5 rounded-[50px] flex items-center justify-around">
					<p className="text-customGreen text-xl md:text-[32px] text-center font-semibold">
						&quot;Designing impactful healthcare
						experiences—seamlessly connecting patients to trusted
						doctors, essential services, and personalized care for
						better health outcomes.&quot;
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
