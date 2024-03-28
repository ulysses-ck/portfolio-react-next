import { HardSkill, ProjectWork } from "@/data/interfaces";

// components
import SVGAngular from "@/components/SVGAngular";
import SVGAWS from "@/components/SVGAWS";
import SVGCSS from "@/components/SVGCSS";
import SVGDebian from "@/components/SVGDebian";
import SVGFirebase from "@/components/SVGFirebase";
import SVGGit from "@/components/SVGGit";
import SVGGoogleClod from "@/components/SVGGoogleCloud";
import SVGGraphQL from "@/components/SVGGraphQL";
import SVGHTML from "@/components/SVGHTML";
import SVGJavaScript from "@/components/SVGJavaScript";
import SVGMongoDB from "@/components/SVGMongoDB";
import SVGMySQL from "@/components/SVGMySQL";
import SVGNodejs from "@/components/SVGNodejs";
import SVGPostgreSQL from "@/components/SVGPostgreSQL";
import SVGReact from "@/components/SVGReact";
import SVGSanity from "@/components/SVGSanity";
import SVGShopify from "@/components/SVGShopify";
import SVGTailwindCSS from "@/components/SVGTailwindCSS";
import SVGTypescript from "@/components/SVGTypeScript";
import SVGVue from "@/components/SVGVue";

// images
import carlasfoodImage from "../../public/carlasfood.png";
import dictappImage from "../../public/dictapp.png";

export const hardSkills: HardSkill[] = [
	{ title: "Angular", component: SVGAngular, color: "#c3002f" },
	{ title: "AWS", component: SVGAWS, color: "" },
	{ title: "React.js", component: SVGReact, color: "#149eca" },
	{ title: "Node.js", component: SVGNodejs, color: "#63b84a" },
	{ title: "TypeScript", component: SVGTypescript, color: "#3178c6" },
	{ title: "CSS", component: SVGCSS, color: "#0068ba" },
	{ title: "Debian", component: SVGDebian, color: "#d70751" },
	{ title: "Firebase", component: SVGFirebase, color: "#ffa308" },
	{ title: "Git", component: SVGGit, color: "#f05639" },
	{ title: "Google Cloud", component: SVGGoogleClod, color: "" },
	{ title: "GraphQL", component: SVGGraphQL, color: "#e63bae" },
	{ title: "HTML", component: SVGHTML, color: "#dd4b25" },
	{ title: "JavaScript", component: SVGJavaScript, color: "#d8c000" },
	{ title: "MongoDB", component: SVGMongoDB, color: "#439934" },
	{ title: "MySQL", component: SVGMySQL, color: "#00618a" },
	{ title: "PostgreSQL", component: SVGPostgreSQL, color: "#2f6792" },
	{ title: "Sanity", component: SVGSanity, color: "" },
	{ title: "Shopify", component: SVGShopify, color: "#7fba35" },
	{ title: "Tailwind CSS", component: SVGTailwindCSS, color: "#42a9a8" },
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
