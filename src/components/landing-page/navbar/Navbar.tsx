import CustomButton from "@/components/shared/CustomButton";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
	return (
		<div className="w-full px-8 md:px-16 py-3 flex items-center justify-between fixed z-10 shadow-md bg-white">
			<Link href="/">
				<h2 className="text-4xl font-leckerli text-customGreen font-semibold">
					SU
				</h2>
			</Link>
			<div className="hidden md:flex items-center gap-20">
				<div className="flex gap-10 items-center">
					<Link
						href="/"
						className="custom-link hover:text-customGreen"
					>
						Home
					</Link>
					<Link
						href="/#about"
						className="custom-link hover:text-customGreen"
					>
						About
					</Link>
					<Link
						href="/#services"
						className="custom-link hover:text-customGreen"
					>
						Services
					</Link>
					<Link
						href="/#work"
						className="custom-link hover:text-customGreen"
					>
						Work
					</Link>
				</div>
				<CustomButton
					btnType="button"
					btnStyles="w-[157px] h-[52px] border-customGreen border-[2px] rounded-3xl cursor-pointer text-customGreen font-medium hover:border-none hover:bg-customGreen hover:text-white transition-all duration-500 ease-in-out"
					btnTitle="Connect With Me"
				/>
			</div>
			<MobileNavbar />
		</div>
	);
};

export default Navbar;
