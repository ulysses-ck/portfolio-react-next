import { HardSkill, ProjectWork } from "@/data/interfaces";

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

// images
import carlasfoodImage from "../../public/carlasfood.png";
import dictappImage from "../../public/dictapp.png";
import timeTrackingDashboardImage from "../../public/time-tracking-dashboard.png";
import unboredImage from "../../public/unbored.png";

export const hardSkills: HardSkill[] = [
	{ title: "Angular", Component: SVGAngular, color: "#c3002f" },
	{ title: "AWS", Component: SVGAWS, color: "" },
	{ title: "CSS", Component: SVGCSS, color: "#0068ba" },
	{ title: "Debian", Component: SVGDebian, color: "#d70751" },
	{ title: "Docker", Component: SVGDocker, color: "#0db7ed" },
	{ title: "Eslint", Component: SVGEslint, color: "#4b32c3" },
	{ title: "Express.js", Component: SVGExpress, color: "#000000" },
	{ title: "Firebase", Component: SVGFirebase, color: "#ffa308" },
	{ title: "Git", Component: SVGGit, color: "#f05639" },
	{ title: "Go", Component: SVGGolang, color: "#00add8" },
	{ title: "Google Cloud Platform", Component: SVGGoogleClod, color: "" },
	{ title: "GraphQL", Component: SVGGraphQL, color: "#e63bae" },
	{ title: "HTML", Component: SVGHTML, color: "#dd4b25" },
	{ title: "Java", Component: SVGJava, color: "#f89820" },
	{ title: "JavaScript", Component: SVGJavaScript, color: "#d8c000" },
	{ title: "Jest", Component: SVGJest, color: "#99425b" },
	{ title: "MongoDB", Component: SVGMongoDB, color: "#439934" },
	{ title: "MySQL", Component: SVGMySQL, color: "#00618a" },
	{ title: "Netlify", Component: SVGNetlify, color: "#00c7b7" },
	{ title: "Node.js", Component: SVGNodejs, color: "#63b84a" },
	{ title: "Playwright", Component: SVGPlaywright, color: "#f56d00" },
	{ title: "PostgreSQL", Component: SVGPostgreSQL, color: "#2f6792" },
	{ title: "Prettier", Component: SVGPrettier, color: "#f7b93e" },
	{ title: "Pug", Component: SVGPug, color: "#a86454" },
	{ title: "Python", Component: SVGPython, color: "#306998" },
	{ title: "React.js", Component: SVGReact, color: "#149eca" },
	{ title: "Rust", Component: SVGRust, color: "#000000" },
	{ title: "Sanity", Component: SVGSanity, color: "" },
	{ title: "Shopify API", Component: SVGShopify, color: "#7fba35" },
	{ title: "Storybook", Component: SVGStorybook, color: "#ff4785" },
	{ title: "Supabase", Component: SVGSupabase, color: "#6394f8" },
	{ title: "Svelte", Component: SVGSvelte, color: "#ff3e00" },
	{ title: "Tailwind CSS", Component: SVGTailwindCSS, color: "#42a9a8" },
	{ title: "TypeScript", Component: SVGTypescript, color: "#3178c6" },
	{ title: "Vercel", Component: SVGVercel, color: "#000000" },
	{ title: "Vue", Component: SVGVue, color: "" },
	{ title: "Next.js", Component: SVGNext, color: "#000000" },
];

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
			{
				title: "React.js",
				color: "#149eca",
				Component: SVGReact,
			},
			{
				title: "HTML",
				color: "#dd4b25",
				Component: SVGHTML,
			},
			{
				title: "CSS",
				color: "#0068ba",
				Component: SVGCSS,
			},
			{
				title: "Git",
				color: "#f05639",
				Component: SVGGit,
			},
			{
				title: "Netlify",
				color: "#00c7b7",
				Component: SVGNetlify,
			},
			{ title: "JavaScript", color: "#d8c000", Component: SVGJavaScript },
			{ title: "Node.js", color: "#63b84a", Component: SVGNodejs },
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
			{
				title: "Node.js",
				color: "#63b84a",
				Component: SVGNodejs,
			},
			{
				title: "HTML",
				color: "#dd4b25",
				Component: SVGHTML,
			},
			{
				title: "CSS",
				color: "#0068ba",
				Component: SVGCSS,
			},

			{
				title: "Pug",
				color: "#a86454",
				Component: SVGPug,
			},
			{ title: "Express.js", color: "#000000", Component: SVGExpress },
			{ title: "JavaScript", color: "#d8c000", Component: SVGJavaScript },
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
			{
				title: "React.js",
				color: "#149eca",
				Component: SVGReact,
			},
			{
				title: "HTML",
				color: "#dd4b25",
				Component: SVGHTML,
			},
			{
				title: "CSS",
				color: "#0068ba",
				Component: SVGCSS,
			},
			{
				title: "Vercel",
				color: "#000000",
				Component: SVGVercel,
			},
			{ title: "JavaScript", color: "#d8c000", Component: SVGJavaScript },
			{ title: "Node.js", color: "#63b84a", Component: SVGNodejs },
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
			{
				title: "React.js",
				color: "#149eca",
				Component: SVGReact,
			},
			{
				title: "HTML",
				color: "#dd4b25",
				Component: SVGHTML,
			},
			{
				title: "CSS",
				color: "#0068ba",
				Component: SVGCSS,
			},
			{
				title: "Netlify",
				color: "#00c7b7",
				Component: SVGNetlify,
			},
			{ title: "TypeScript", color: "#3178c6", Component: SVGTypescript },
			{ title: "Prettier", color: "#f7b93e", Component: SVGPrettier },
			{ title: "Eslint", color: "#4b32c3", Component: SVGEslint },
			{ title: "Next.js", color: "#000000", Component: SVGNext },
			{ title: "Node.js", color: "#63b84a", Component: SVGNodejs },
		],
	},
];
