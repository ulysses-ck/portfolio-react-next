import { HardSkills, ProjectWork } from "@/data/interfaces";

// components
import {
	FaAngular,
	FaAws,
	FaCss3Alt,
	FaDocker,
	FaGit,
	FaHtml5,
	FaJava,
	FaNode,
	FaPython,
	FaReact,
	FaRust,
	FaShopify,
	FaVuejs,
} from "react-icons/fa";
import { FcDebian } from "react-icons/fc";
import {
	SiEslint,
	SiExpress,
	SiGooglecloud,
	SiJavascript,
	SiJest,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiPlaywright,
	SiPrettier,
	SiPug,
	SiSanity,
	SiStorybook,
	SiSupabase,
	SiSvelte,
	SiTestinglibrary,
	SiTypescript,
	SiVercel,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoNetlify, BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssLine } from "react-icons/ri";

// images
import carlasfoodImage from "../../public/carlasfood.png";
import dictappImage from "../../public/dictapp.png";
import timeTrackingDashboardImage from "../../public/time-tracking-dashboard.png";
import unboredImage from "../../public/unbored.png";
import angularBudgetImage from "../../public/angular-budget.png";
import angularTodoImage from "../../public/angular-todo.png";
import angularBmiImage from "../../public/angular-bmi-calculator.png";
import angularSearchImage from "../../public/angular-images.png";
import dictionaryAppImage from "../../public/dictionary-app.png";
import angularCreditCardImage from "../../public/angular-credit-card.png";
import portfolioReacNextImage from "../../public/portfolio-react-next.png";
import reactExpressDymamoDBImage from "../../public/react-express-dynamodb.png";

// hashtable of a list of hardskills
export const hardSkills: HardSkills = {
	Angular: { title: "Angular", Component: FaAngular, color: "#c3002f" },
	AWS: { title: "AWS", Component: FaAws, color: "" },
	CSS: { title: "CSS", Component: FaCss3Alt, color: "#0068ba" },
	Debian: { title: "Debian", Component: FcDebian, color: "#a80030" },
	Docker: { title: "Docker", Component: FaDocker, color: "#0db7ed" },
	Eslint: { title: "Eslint", Component: SiEslint, color: "#4b32c3" },
	"Express.js": {
		title: "Express.js",
		Component: SiExpress,
		color: "#000000",
	},
	Firebase: { title: "Firebase", Component: IoLogoFirebase, color: "#ffa308" },
	Git: { title: "Git", Component: FaGit, color: "#f05639" },
	Go: { title: "Go", Component: FaGolang, color: "#00add8" },
	"Google Cloud Platform": {
		title: "Google Cloud Platform",
		Component: SiGooglecloud,
		color: "",
	},
	GraphQL: { title: "GraphQL", Component: GrGraphQl, color: "#e63bae" },
	HTML: { title: "HTML", Component: FaHtml5, color: "#dd4b25" },
	Java: { title: "Java", Component: FaJava, color: "#f89820" },
	JavaScript: {
		title: "JavaScript",
		Component: SiJavascript,
		color: "#d8c000",
	},
	Jest: { title: "Jest", Component: SiJest, color: "#99425b" },
	MongoDB: { title: "MongoDB", Component: SiMongodb, color: "#439934" },
	MySQL: { title: "MySQL", Component: SiMysql, color: "#00618a" },
	Netlify: { title: "Netlify", Component: BiLogoNetlify, color: "#00c7b7" },
	"Node.js": { title: "Node.js", Component: FaNode, color: "#63b84a" },
	Playwright: {
		title: "Playwright",
		Component: SiPlaywright,
		color: "#f56d00",
	},
	PostgreSQL: {
		title: "PostgreSQL",
		Component: BiLogoPostgresql,
		color: "#2f6792",
	},
	Prettier: { title: "Prettier", Component: SiPrettier, color: "#f7b93e" },
	Pug: { title: "Pug", Component: SiPug, color: "#a86454" },
	Python: { title: "Python", Component: FaPython, color: "#306998" },
	"React.js": { title: "React.js", Component: FaReact, color: "#149eca" },
	Rust: { title: "Rust", Component: FaRust, color: "#000000" },
	Sanity: { title: "Sanity", Component: SiSanity, color: "" },
	"Shopify API": {
		title: "Shopify API",
		Component: FaShopify,
		color: "#7fba35",
	},
	Storybook: { title: "Storybook", Component: SiStorybook, color: "#ff4785" },
	Supabase: { title: "Supabase", Component: SiSupabase, color: "#6394f8" },
	Svelte: { title: "Svelte", Component: SiSvelte, color: "#ff3e00" },
	"Testing Library": {
		title: "Testing Library",
		Component: SiTestinglibrary,
		color: "#f91f1e",
	},
	"Tailwind CSS": {
		title: "Tailwind CSS",
		Component: RiTailwindCssLine,
		color: "#42a9a8",
	},
	TypeScript: {
		title: "TypeScript",
		Component: SiTypescript,
		color: "#3178c6",
	},
	Vercel: { title: "Vercel", Component: SiVercel, color: "#000000" },
	"Vue.js": { title: "Vue.js", Component: FaVuejs, color: "" },
	"Next.js": { title: "Next.js", Component: SiNextdotjs, color: "#000000" },
};

export const projects: ProjectWork[] = [
	{
		titleProjectWork: "Dictionary App",
		urlProject: "https://dictapp.netlify.app/",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Dictionary App",
			src: dictappImage.src,
		},
		techStack: [
			hardSkills["React.js"],
			hardSkills["Git"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["Netlify"],
			hardSkills["JavaScript"],
			hardSkills["Node.js"],
		],
	},
	{
		titleProjectWork: "Carla's Food",
		urlProject: "https://github.com/ulysses-ck/carlasfood",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Restaurant App page that shows a menu",
			src: carlasfoodImage.src,
		},
		techStack: [
			hardSkills["Node.js"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["JavaScript"],
			hardSkills["Git"],
			hardSkills["Express.js"],
			hardSkills["Pug"],
		],
	},
	{
		titleProjectWork: "Time Tracking Dashboard",
		urlProject: "http://time-tracking-dashboard-roan.vercel.app/",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Time Tracking Dashboard",
			src: timeTrackingDashboardImage.src,
		},
		techStack: [
			hardSkills["React.js"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["Vercel"],
			hardSkills["JavaScript"],
			hardSkills["Node.js"],
		],
	},
	{
		titleProjectWork: "Unbored",
		urlProject: "https://unbored.netlify.app/",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Unbored App",
			src: unboredImage.src,
		},
		techStack: [
			hardSkills["React.js"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["Netlify"],
			hardSkills["TypeScript"],
			hardSkills["Prettier"],
			hardSkills["Eslint"],
			hardSkills["Git"],
			hardSkills["Next.js"],
			hardSkills["Node.js"],
		],
	},
	{
		titleProjectWork: "Angular Todo App",
		urlProject: "https://calm-llama-ae8039.netlify.app/",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Angular Todo App",
			src: angularTodoImage.src,
		},
		techStack: [
			hardSkills["Angular"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["Netlify"],
			hardSkills["Node.js"],
			hardSkills["Git"],
			hardSkills["Tailwind CSS"],
			hardSkills["TypeScript"],
			hardSkills["Prettier"],
		],
	},
	{
		titleProjectWork: "Angular Budget",
		urlProject: "https://angular-budget-seven.vercel.app/",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Angular Budget",
			src: angularBudgetImage.src,
		},
		techStack: [
			hardSkills["Angular"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["Vercel"],
			hardSkills["Node.js"],
			hardSkills["Git"],
			hardSkills["TypeScript"],
			hardSkills["Prettier"],
		],
	},
	{
		titleProjectWork: "Angular BMI Calculator",
		urlProject: "https://heartfelt-profiterole-ddaf4e.netlify.app/",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Angular BMI Calculator",
			src: angularBmiImage.src,
		},
		techStack: [
			hardSkills["Angular"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["Netlify"],
			hardSkills["Node.js"],
			hardSkills["Git"],
			hardSkills["TypeScript"],
			hardSkills["Prettier"],
			hardSkills["Tailwind CSS"],
		],
	},
	{
		titleProjectWork: "Angular Search Images",
		urlProject: "https://angular-search-images.vercel.app/",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Angular Search Images",
			src: angularSearchImage.src,
		},
		techStack: [
			hardSkills["Angular"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["Netlify"],
			hardSkills["Node.js"],
			hardSkills["Git"],
			hardSkills["TypeScript"],
			hardSkills["Prettier"],
		],
	},
	{
		titleProjectWork: "Dictionary App",
		urlProject: "https://safjkib2pr.netlify.app/",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Dictionary App",
			src: dictionaryAppImage.src,
		},
		techStack: [
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["Netlify"],
			hardSkills["Git"],
			hardSkills["JavaScript"],
		],
	},
	{
		titleProjectWork: "Angular Credit Card Manager",

		urlProject:
			"https://6481663a0da9322601e3bcf2--candid-douhua-47bd82.netlify.app/",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Angular Credit Card Manager",
			src: angularCreditCardImage.src,
		},
		techStack: [
			hardSkills["Angular"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["Netlify"],
			hardSkills["Node.js"],
			hardSkills["Git"],
			hardSkills["Prettier"],
			hardSkills["Tailwind CSS"],
			hardSkills["Firebase"],
		],
	},
	{
		titleProjectWork: "React Express DynamoDB",
		urlProject: "https://github.com/ulysses-ck/express-react-dynamodb",
		imageProject: {
			width: 900,
			height: 900,
			alt: "React Express DynamoDB",
			src: reactExpressDymamoDBImage.src,
		},
		techStack: [
			hardSkills["React.js"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["TypeScript"],
			hardSkills["JavaScript"],
			hardSkills["Node.js"],
			hardSkills["Git"],
			hardSkills["Express.js"],
			hardSkills["Prettier"],
			hardSkills["Eslint"],
			hardSkills["AWS"],
		],
	},

	{
		titleProjectWork: "Portfolio React Next",
		urlProject: "https://test-portfolio-ulysses.vercel.app/",
		imageProject: {
			width: 900,
			height: 900,
			alt: "Portfolio React Next",
			src: portfolioReacNextImage.src,
		},
		techStack: [
			hardSkills["React.js"],
			hardSkills["HTML"],
			hardSkills["CSS"],
			hardSkills["Vercel"],
			hardSkills["Node.js"],
			hardSkills["Git"],
			hardSkills["TypeScript"],
			hardSkills["Prettier"],
			hardSkills["Tailwind CSS"],
			hardSkills["Next.js"],
			hardSkills["Storybook"],
			hardSkills["Testing Library"],
			hardSkills["Jest"],
			hardSkills["Eslint"],
		],
	},
];
