export interface ProjectWork {
	imageProject: ImageProject;
	titleProjectWork: string;
	techStack: HardSkill[];
	urlProject?: string;
}

export interface HardSkill {
	title: string;
	Component: React.FC<{ color: string }>;
	color: string;
}

interface ImageProject {
	width?: number | `${number}`;
	height?: number | `${number}`;
	alt: string;
	src: string;
	className?: string;
}
