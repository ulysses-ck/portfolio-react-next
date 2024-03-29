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

export const hardSkills: HardSkill[] = [
	{ title: "Angular", component: SVGAngular, color: "#c3002f" },
	{ title: "AWS", component: SVGAWS, color: "" },
	{ title: "CSS", component: SVGCSS, color: "#0068ba" },
	{ title: "Debian", component: SVGDebian, color: "#d70751" },
	{ title: "Docker", component: SVGDocker, color: "#0db7ed" },
	{ title: "Eslint", component: SVGEslint, color: "#4b32c3" },
	{ title: "Express.js", component: SVGExpress, color: "#000000" },
	{ title: "Firebase", component: SVGFirebase, color: "#ffa308" },
	{ title: "Git", component: SVGGit, color: "#f05639" },
	{ title: "Go", component: SVGGolang, color: "#00add8" },
	{ title: "Google Cloud Platform", component: SVGGoogleClod, color: "" },
	{ title: "GraphQL", component: SVGGraphQL, color: "#e63bae" },
	{ title: "HTML", component: SVGHTML, color: "#dd4b25" },
	{ title: "Java", component: SVGJava, color: "#f89820" },
	{ title: "JavaScript", component: SVGJavaScript, color: "#d8c000" },
	{ title: "Jest", component: SVGJest, color: "#99425b" },
	{ title: "MongoDB", component: SVGMongoDB, color: "#439934" },
	{ title: "MySQL", component: SVGMySQL, color: "#00618a" },
	{ title: "Netlify", component: SVGNetlify, color: "#00c7b7" },
	{ title: "Node.js", component: SVGNodejs, color: "#63b84a" },
	{ title: "Playwright", component: SVGPlaywright, color: "#f56d00" },
	{ title: "PostgreSQL", component: SVGPostgreSQL, color: "#2f6792" },
	{ title: "Prettier", component: SVGPrettier, color: "#f7b93e" },
	{ title: "Pug", component: SVGPug, color: "#a86454" },
	{ title: "Python", component: SVGPython, color: "#306998" },
	{ title: "React.js", component: SVGReact, color: "#149eca" },
	{ title: "Rust", component: SVGRust, color: "#000000" },
	{ title: "Sanity", component: SVGSanity, color: "" },
	{ title: "Shopify API", component: SVGShopify, color: "#7fba35" },
	{ title: "Storybook", component: SVGStorybook, color: "#ff4785" },
	{ title: "Supabase", component: SVGSupabase, color: "#6394f8" },
	{ title: "Svelte", component: SVGSvelte, color: "#ff3e00" },
	{ title: "Tailwind CSS", component: SVGTailwindCSS, color: "#42a9a8" },
	{ title: "TypeScript", component: SVGTypescript, color: "#3178c6" },
	{ title: "Vercel", component: SVGVercel, color: "#000000" },
	{ title: "Vue", component: SVGVue, color: "" },
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
				Component: () => <SVGReact color="#149eca" />,
			},
			{
				title: "HTML",
				color: "#dd4b25",
				Component: () => <SVGHTML color="#dd4b25" />,
			},
			{
				title: "CSS",
				color: "#0068ba",
				Component: () => <SVGCSS color="#0068ba" />,
			},
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
				Component: () => <SVGNodejs color="#63b84a" />,
			},
			{
				title: "HTML",
				color: "#dd4b25",
				Component: () => <SVGHTML color="#dd4b25" />,
			},
			{
				title: "CSS",
				color: "#0068ba",
				Component: () => <SVGCSS color="#0068ba" />,
			},
		],
	},
];
