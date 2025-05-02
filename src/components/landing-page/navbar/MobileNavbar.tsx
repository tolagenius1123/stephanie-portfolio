import Link from "next/link";
import { AlignRight } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import CustomButton from "@/components/shared/CustomButton";

export default function MobileNavbar() {
	return (
		<div className="md:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<AlignRight className="h-8 w-8 text-customGreen" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>
							<Link href="/">
								<h2 className="text-4xl font-leckerli text-customGreen font-semibold">
									SU
								</h2>
							</Link>
						</SheetTitle>
						<SheetDescription>{""}</SheetDescription>
					</SheetHeader>
					<div className="flex flex-col gap-8 px-14">
						<div className="flex flex-col gap-8 ">
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
					{/* <SheetFooter>
						<SheetClose asChild>
							<button type="submit">Save changes</button>
						</SheetClose>
					</SheetFooter> */}
				</SheetContent>
			</Sheet>
		</div>
	);
}
