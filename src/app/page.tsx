import About from "@/components/landing-page/About";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/navbar/Navbar";
import Work from "@/components/landing-page/Work";

export default function Home() {
	return (
		<div className="h-auto w-full">
			<Navbar />
			<Hero />
			<About />
			<Work />
		</div>
	);
}
