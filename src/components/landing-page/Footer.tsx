import ContactForm from "../shared/ContactForm";

const Footer = () => {
	return (
		<div
			id="contact"
			className="w-full bg-customPurple px-8 md:px-16 pt-[50px] md:pt-[100px] pb-20 flex flex-col md:flex-row items-center gap-10"
		>
			<div className="w-full md:w-1/2 text-white flex flex-col gap-[100px]">
				<div className="flex flex-col gap-5">
					<h2 className="text-bold text-[30px] md:text-[40px]">
						Let's Work Together
					</h2>
					<p>
						Ready to create something impactful? Whether it's a
						fresh concept or a project in progress, I'm all in—let's
						bring your vision to life with clarity, creativity, and
						purpose.
					</p>
				</div>
				<p>ukachukwustephnie@gmail.com</p>
			</div>
			<div className="w-full md:w-1/2 p-0 md:p-5">
				<ContactForm />
			</div>
		</div>
	);
};

export default Footer;
