// i18n
import { useTranslations } from "next-intl";
// next
import dynamic from "next/dynamic";
import Image from "next/image";

// styles
import styles from "./page.module.css";

// assets
import ImageProfile from "../../../public/profile-photo.jpg";

// components
import SectionGeneric from "@/components/SectionGeneric";
import ImageContainer from "@/components/ImageContainer";

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
import SVGGenericContainer from "@/components/SVGGenericContainer";

const LanguageSelect = dynamic(() => import("@/components/LanguageSelect"), {
	ssr: false,
});

const ThemeSwitcher = dynamic(() => import("@/components/ThemeSwitcher"), {
	ssr: false,
});

const HeaderMobile = dynamic(() => import("@/components/HeaderMobile"), {
	ssr: false,
});

export default function Index() {
	const t = useTranslations("IndexPage");

	interface HardSkill {
		title: string;
		component: React.FC<{ color: string }>;
		color: string;
	}

	const hardSkills: HardSkill[] = [
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

	return (
		<>
			<HeaderMobile className=" self-end p-2" />
			<ThemeSwitcher className=" absolute top-2 left-2" />
			<div className="absolute top-2 right-2">
				<LanguageSelect />
			</div>
			<main className="w-full overflow-y-scroll flex flex-col">
				<SectionGeneric className="bg-light-blue-primary dark:bg-blue-primary h-lvh flex-shrink-0 flex justify-center items-center flex-col">
					<ImageContainer width="180px" height="180px">
						<Image
							src={ImageProfile}
							alt="Profile Picture of Ulises Apaza"
							className="rounded-full"
						/>
					</ImageContainer>
					<h1 className="text-4xl text-center">{t("title")}</h1>
					<p className="text-center">{t("subtitle")}</p>
				</SectionGeneric>
				<SectionGeneric className="bg-light-blue-primary dark:bg-blue-primary h-lvh flex-shrink-0 p-2 flex flex-col items-center gap-4">
					<h2>{t("titleAbout")}</h2>
					<p>{t("descriptionAbout")}</p>
					<div className={styles.GridHardSkills}>
						{hardSkills.map((hardSkill) => {
							const Component = hardSkill.component;
							return (
								<div
									key={hardSkill.title}
									className="w-[55px] p-1 h-auto rounded-2xl shadow-2xl flex justify-center items-center"
								>
									<SVGGenericContainer width="50px" height="50px">
										<Component color={hardSkill.color} />
									</SVGGenericContainer>
								</div>
							);
						})}
					</div>
				</SectionGeneric>
			</main>
		</>
	);
}
