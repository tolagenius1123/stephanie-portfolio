import { projects } from "@/lib/utils";
import ProductCard from "../shared/ProductCard";

export default function Work() {
	return (
		<div
			id="work"
			className="w-full bg-white px-8 md:px-16 pt-[100px] pb-20"
		>
			<div className="flex items-center justify-around">
				<h2 className="text-2xl font-bold">My Recent Work</h2>
			</div>
			<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
				{projects.map((project) => (
					<ProductCard key={project.projectId} product={project} />
				))}
			</div>
		</div>
	);
}
