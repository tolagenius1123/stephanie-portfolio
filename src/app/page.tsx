import About from "@/components/landing-page/About";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/navbar/Navbar";
import Services from "@/components/landing-page/Services";
import Work from "@/components/landing-page/Work";

export default function Home() {
	return (
		<div className="h-auto w-full">
			<Navbar />
			<Hero />
			<About />
			<Work />
			<Services />
			<Footer />
		</div>
	);
}
