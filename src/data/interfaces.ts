export interface ProjectWork {
	imageProject: ImageProject;
	titleProjectWork: string;
	techStack: HardSkill[];
	urlProject?: string;
}

export interface HardSkill {
	title: TechStack;
	Component: React.FC<{ color: string }>;
	color: string;
}

export type TechStack =
	| "Angular"
	| "AWS"
	| "CSS"
	| "Debian"
	| "Docker"
	| "Eslint"
	| "Express.js"
	| "Firebase"
	| "Git"
	| "Go"
	| "Google Cloud Platform"
	| "GraphQL"
	| "HTML"
	| "Java"
	| "JavaScript"
	| "Jest"
	| "MongoDB"
	| "MySQL"
	| "Netlify"
	| "Node.js"
	| "Playwright"
	| "PostgreSQL"
	| "Prettier"
	| "Pug"
	| "Python"
	| "React.js"
	| "Rust"
	| "Sanity"
	| "Shopify API"
	| "Storybook"
	| "Supabase"
	| "Svelte"
	| "Testing Library"
	| "TypeScript"
	| "Tailwind CSS"
	| "Vercel"
	| "Vue.js"
	| "Next.js";

interface ImageProject {
	width?: number | `${number}`;
	height?: number | `${number}`;
	alt: string;
	src: string;
	className?: string;
}

export type HardSkills = Record<TechStack, HardSkill>;
