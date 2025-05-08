import { Experience, Experience2 } from "@/assets/images";
import Image from "next/image";

const About = () => {
	return (
		<div
			id="about"
			className="w-full bg-customOffWhite px-8 md:px-16 pt-[150px] pb-20"
		>
			<div className="flex w-full justify-between flex-col md:flex-row gap-10 md:gap-5">
				<div className="w-full md:w-1/2 flex items-center md:items-start justify-around md:justify-start">
					<Image src={Experience} alt="experience" />
				</div>
				<div className="w-full md:w-1/2 flex justify-around items-center">
					<div className="">
						<h2 className="text-2xl font-bold">About Me</h2>
						<p className="mt-4">
							My name is Ukachukwu Stephnie Munachi!
						</p>
						<p className="">
							I'm a passionate and detail-oriented UI/UX designer
							dedicated to crafting exceptional digital
							experiences that balance usability and aesthetics.
							My approach is deeply rooted in user-centered design
							principles—I focus on understanding user needs and
							behaviors to create interfaces that are both
							intuitive and visually engaging.
						</p>
					</div>
				</div>
			</div>
			<div className="mt-20 flex w-full justify-between flex-col md:flex-row gap-10 md:gap-5">
				<div className="w-full md:w-1/2 flex justify-around items-center">
					<div className="">
						<h2 className="text-2xl font-bold">My Approach</h2>
						<div className="mt-5">
							<p className="text-xl font-semibold">
								Collaborative
							</p>
							<p className="mt-5">
								I believe in the power of collaboration to
								create exceptional Product. As an extension of
								your team, I immerse myself in your vision and
								goals. I work closely with you to develop a
								product that not only reflects your brand but
								exceeds your expectations.
							</p>
						</div>
						<div className="mt-5">
							<p className="text-xl font-semibold">Iterative</p>
							<p className="mt-5">
								I take an iterative approach in my work to
								ensure the final result aligns with your
								creative vision and reflects your unique brand
								identity. We'll work together to refine and
								fine-tune your site's design, leaving no detail
								overlooked
							</p>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex items-center md:items-start justify-around md:justify-end">
					<Image src={Experience2} alt="experience" />
				</div>
			</div>
		</div>
	);
};

export default About;
