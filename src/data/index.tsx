import { HardSkills, ProjectWork } from "@/data/interfaces";

// components
import SVGAWS from "@/components/SVGAWS";
import SVGAngular from "@/components/SVGAngular";
import SVGCSS from "@/components/SVGCSS";
import SVGDebian from "@/components/SVGDebian";
import SVGDocker from "@/components/SVGDocker";
import SVGEslint from "@/components/SVGEslint";
import SVGExpress from "@/components/SVGExpress";
import SVGFirebase from "@/components/SVGFirebase";
import SVGGit from "@/components/SVGGit";
import SVGGolang from "@/components/SVGGolang";
import SVGGoogleClod from "@/components/SVGGoogleCloud";
import SVGGraphQL from "@/components/SVGGraphQL";
import SVGHTML from "@/components/SVGHTML";
import SVGJava from "@/components/SVGJava";
import SVGJavaScript from "@/components/SVGJavaScript";
import SVGJest from "@/components/SVGJest";
import SVGMongoDB from "@/components/SVGMongoDB";
import SVGMySQL from "@/components/SVGMySQL";
import SVGNetlify from "@/components/SVGNetlify";
import SVGNext from "@/components/SVGNext";
import SVGNodejs from "@/components/SVGNodejs";
import SVGPlaywright from "@/components/SVGPlaywright";
import SVGPostgreSQL from "@/components/SVGPostgreSQL";
import SVGPrettier from "@/components/SVGPrettier";
import SVGPug from "@/components/SVGPug";
import SVGPython from "@/components/SVGPython";
import SVGReact from "@/components/SVGReact";
import SVGRust from "@/components/SVGRust";
import SVGSanity from "@/components/SVGSanity";
import SVGShopify from "@/components/SVGShopify";
import SVGStorybook from "@/components/SVGStorybook";
import SVGSupabase from "@/components/SVGSupabase";
import SVGSvelte from "@/components/SVGSvelte";
import SVGTailwindCSS from "@/components/SVGTailwindCSS";
import SVGTypescript from "@/components/SVGTypeScript";
import SVGVercel from "@/components/SVGVercel";
import SVGVue from "@/components/SVGVue";
import SVGTestingLibrary from "@/components/SVGTestingLibrary";

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
	Angular: { title: "Angular", Component: SVGAngular, color: "#c3002f" },
	AWS: { title: "AWS", Component: SVGAWS, color: "" },
	CSS: { title: "CSS", Component: SVGCSS, color: "#0068ba" },
	Debian: { title: "Debian", Component: SVGDebian, color: "#a80030" },
	Docker: { title: "Docker", Component: SVGDocker, color: "#0db7ed" },
	Eslint: { title: "Eslint", Component: SVGEslint, color: "#4b32c3" },
	"Express.js": {
		title: "Express.js",
		Component: SVGExpress,
		color: "#000000",
	},
	Firebase: { title: "Firebase", Component: SVGFirebase, color: "#ffa308" },
	Git: { title: "Git", Component: SVGGit, color: "#f05639" },
	Go: { title: "Go", Component: SVGGolang, color: "#00add8" },
	"Google Cloud Platform": {
		title: "Google Cloud Platform",
		Component: SVGGoogleClod,
		color: "",
	},
	GraphQL: { title: "GraphQL", Component: SVGGraphQL, color: "#e63bae" },
	HTML: { title: "HTML", Component: SVGHTML, color: "#dd4b25" },
	Java: { title: "Java", Component: SVGJava, color: "#f89820" },
	JavaScript: {
		title: "JavaScript",
		Component: SVGJavaScript,
		color: "#d8c000",
	},
	Jest: { title: "Jest", Component: SVGJest, color: "#99425b" },
	MongoDB: { title: "MongoDB", Component: SVGMongoDB, color: "#439934" },
	MySQL: { title: "MySQL", Component: SVGMySQL, color: "#00618a" },
	Netlify: { title: "Netlify", Component: SVGNetlify, color: "#00c7b7" },
	"Node.js": { title: "Node.js", Component: SVGNodejs, color: "#63b84a" },
	Playwright: {
		title: "Playwright",
		Component: SVGPlaywright,
		color: "#f56d00",
	},
	PostgreSQL: {
		title: "PostgreSQL",
		Component: SVGPostgreSQL,
		color: "#2f6792",
	},
	Prettier: { title: "Prettier", Component: SVGPrettier, color: "#f7b93e" },
	Pug: { title: "Pug", Component: SVGPug, color: "#a86454" },
	Python: { title: "Python", Component: SVGPython, color: "#306998" },
	"React.js": { title: "React.js", Component: SVGReact, color: "#149eca" },
	Rust: { title: "Rust", Component: SVGRust, color: "#000000" },
	Sanity: { title: "Sanity", Component: SVGSanity, color: "" },
	"Shopify API": {
		title: "Shopify API",
		Component: SVGShopify,
		color: "#7fba35",
	},
	Storybook: { title: "Storybook", Component: SVGStorybook, color: "#ff4785" },
	Supabase: { title: "Supabase", Component: SVGSupabase, color: "#6394f8" },
	Svelte: { title: "Svelte", Component: SVGSvelte, color: "#ff3e00" },
	"Testing Library": {
		title: "Testing Library",
		Component: SVGTestingLibrary,
		color: "#f91f1e",
	},
	"Tailwind CSS": {
		title: "Tailwind CSS",
		Component: SVGTailwindCSS,
		color: "#42a9a8",
	},
	TypeScript: {
		title: "TypeScript",
		Component: SVGTypescript,
		color: "#3178c6",
	},
	Vercel: { title: "Vercel", Component: SVGVercel, color: "#000000" },
	"Vue.js": { title: "Vue.js", Component: SVGVue, color: "" },
	"Next.js": { title: "Next.js", Component: SVGNext, color: "#000000" },
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
