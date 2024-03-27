export interface ProjectWork {
	imageProject: ImageProject;
	titleProjectWork: string;
	techStack: TechStack[];
	urlProject?: string;
}

export interface TechStack {
	Component: React.FC<{ color: string }>;
	title: string;
	color: string;
}

interface ImageProject {
	width?: number | `${number}`;
	height?: number | `${number}`;
	alt: string;
	src: string;
	className?: string;
}
