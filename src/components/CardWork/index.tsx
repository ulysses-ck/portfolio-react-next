import Image from "next/image";

import { ProjectWork } from "@/data/interfaces";

import SVGGenericContainer from "../SVGGenericContainer";
import { FaShareSquare } from "react-icons/fa";

export default function CardWork({
	projectWork,
}: {
	projectWork: ProjectWork;
}) {
	return (
		<article className="flex flex-col rounded-2xl bg-light-blue-primary dark:bg-blue-primary shadow-md dark:shadow-md">
			<a href={projectWork.urlProject} className="w-fit h-fit" target="_blank">
				<figure className="relative rounded-t-2xl">
					<span className="w-[30px] h-[30px] absolute top-0 right-0 flex justify-center items-center bg-yellow-accent-color rounded-tr-2xl">
						<SVGGenericContainer width="15px" height="15px">
							<FaShareSquare color="black"></FaShareSquare>
						</SVGGenericContainer>
					</span>
					<Image
						src={projectWork.imageProject.src}
						width={projectWork.imageProject.width}
						height={projectWork.imageProject.height}
						alt={projectWork.imageProject.alt}
						priority
						className={`rounded-t-2xl object-cover w-full h-full ${projectWork.imageProject.className}`}
					/>
				</figure>
			</a>
			<h3 className="text-center text-xl">{projectWork.titleProjectWork}</h3>
			<ul className="flex gap-2 justify-center p-4 flex-wrap">
				{projectWork.techStack.map((tech) => (
					<li key={tech.title} title={tech.title}>
						<SVGGenericContainer
							width="45px"
							height="45px"
							className=" mix-blend-multiply dark:mix-blend-lighten"
						>
							<tech.Component color={tech.color}></tech.Component>
						</SVGGenericContainer>
					</li>
				))}
			</ul>
		</article>
	);
}
