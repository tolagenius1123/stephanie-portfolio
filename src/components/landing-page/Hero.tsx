"use client";
import Image from "next/image";
import CustomButton from "../shared/CustomButton";
import { Portrait } from "@/assets/images";
import { useRouter } from "next/navigation";

export default function Hero() {
	const router = useRouter();

	return (
		<div
			id="hero"
			className="w-full bg-white px-8 md:px-16 pt-[150px] md:pt-[200px] pb-20 flex flex-col md:flex-row justify-between gap-10 md:gap-10"
		>
			<div className="w-full md:w-1/2 flex items-center justify-center">
				<div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start text-customBlack">
					<p className="text-xl">Hello🖐</p>
					<h2 className="text-4xl font-bold">
						I&apos;m Stephanie Ukachukwu
					</h2>
					<p>
						I&apos;m a passionate UI/UX designer dedicated to
						crafting intuitive, functional, and visually engaging
						digital experiences. With a strong focus on
						user-centered design, I strive to create interfaces that
						are not only beautiful but also meaningful, ensuring
						that every interaction feels seamless, accessible, and
						purposeful.
					</p>
					<div className="">
						<CustomButton
							btnType="button"
							btnStyles="mx-auto md:mx:0 mt-5 w-[157px] h-[52px] hover:border-[2px] hover:border-customGreen hover:bg-white rounded-3xl cursor-pointer text-white hover:text-customGreen font-medium bg-customGreen transition-all duration-500 ease-in-out"
							btnTitle="Connect With Me"
							btnAction={() => router.push("/#contact")}
						/>
					</div>
				</div>
			</div>
			<div className="w-full md:w-1/2 flex items-center justify-center">
				<Image src={Portrait} alt="portrait" />
			</div>
		</div>
	);
}
