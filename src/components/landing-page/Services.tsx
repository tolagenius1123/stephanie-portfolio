const Services = () => {
	return (
		<div className="w-full bg-white px-8 md:px-16 pt-[50px] md:pt-[100px] pb-20 md:pb-30 flex flex-col items-center">
			<div className="flex items-center justify-around">
				<h2 className="text-2xl font-bold">My Services</h2>
			</div>
			<div className="mt-10 w-[90%] md:w-[80%] h-auto flex flex-col items-center justify-around">
				<div className="w-full">
					<div className="flex items-center gap-10 bg-customOffWhite py-4 px-8 border-b cursor-pointer hover:bg-customGreen hover:text-white">
						<p className="text-customAsh text-[40px] md:text-[50px] font-bold">
							01
						</p>
						<p className="text-lg md:text-[25px] font-semibold">
							User Experience (UX): Research, wireframing, user
							flows, and testing
						</p>
					</div>
					<div className="flex items-center gap-10 bg-customOffWhite py-4 px-8 border-b cursor-pointer hover:bg-customGreen hover:text-white">
						<p className="text-customAsh text-[40px] md:text-[50px] font-bold">
							02
						</p>
						<p className="text-lg md:text-[25px] font-semibold">
							User Interface (UI): Clean, modern, and
							brand-aligned designs
						</p>
					</div>
					<div className="flex items-center gap-10 bg-customOffWhite py-4 px-8 border-b cursor-pointer hover:bg-customGreen hover:text-white">
						<p className="text-customAsh text-[40px] md:text-[50px] font-bold">
							03
						</p>
						<p className="text-lg md:text-[25px] font-semibold">
							Prototyping: Creating interactive prototypes to
							bring ideas to life
						</p>
					</div>
					<div className="flex items-center gap-10 bg-customOffWhite py-4 px-8 border-b cursor-pointer hover:bg-customGreen hover:text-white">
						<p className="text-customAsh text-[40px] md:text-[50px] font-bold">
							04
						</p>
						<p className="text-lg md:text-[25px] font-semibold">
							Design Systems: Building scalable and consistent UI
							components
						</p>
					</div>
					<div className="flex items-center gap-10 bg-customOffWhite py-4 px-8 border-b cursor-pointer hover:bg-customGreen hover:text-white">
						<p className="text-customAsh text-[40px] md:text-[50px] font-bold">
							05
						</p>
						<p className="text-lg md:text-[25px] font-semibold">
							Accessibility: Designing for inclusivity and ease of
							use
						</p>
					</div>
					<div className="flex items-center gap-10 bg-customOffWhite py-4 px-8 border-b cursor-pointer hover:bg-customGreen hover:text-white">
						<p className="text-customAsh text-[40px] md:text-[50px] font-bold">
							06
						</p>
						<p className="text-lg md:text-[25px] font-semibold">
							Tools I Use: Figma, Sketch, Photoshop, illustration
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
