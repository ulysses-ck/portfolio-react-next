import Image from "next/image";

import { ProjectWork } from "@/data/interfaces";

import SVGGenericContainer from "../SVGGenericContainer";
import SVGOpenExternal from "../SVGOpenExternal";

export default function CardWork({
	projectWork,
}: {
	projectWork: ProjectWork;
}) {
	return (
		<article className="flex flex-col rounded-2xl bg-light-blue-primary dark:bg-blue-secondary shadow-md dark:shadow-md">
			<figure className="relative rounded-t-2xl">
				<a
					href={projectWork.urlProject}
					className="w-[30px] h-[30px] absolute top-0 right-0 flex justify-center items-center bg-yellow-accent-color rounded-tr-2xl"
				>
					<SVGGenericContainer width="15px" height="15px">
						<SVGOpenExternal color="black"></SVGOpenExternal>
					</SVGGenericContainer>
				</a>
				<Image
					src={projectWork.imageProject.src}
					width={projectWork.imageProject.width}
					height={projectWork.imageProject.height}
					alt={projectWork.imageProject.alt}
					priority
					className={`rounded-t-2xl object-cover w-full h-full ${projectWork.imageProject.className}`}
				/>
			</figure>
			<h3 className="text-center">{projectWork.titleProjectWork}</h3>
			<ul className="flex gap-2 justify-center p-4">
				{projectWork.techStack.map((tech) => (
					<li key={tech.title} title={tech.title}>
						<SVGGenericContainer width="45px" height="45px">
							<tech.Component color={tech.color}></tech.Component>
						</SVGGenericContainer>
					</li>
				))}
			</ul>
		</article>
	);
}
