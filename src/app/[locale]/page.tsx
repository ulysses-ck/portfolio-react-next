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
import SVGGenericContainer from "@/components/SVGGenericContainer";

// data
import { hardSkills, projects } from "@/data";
import CardWork from "@/components/CardWork";
import FormContact from "@/components/FormContact";

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

	async function sendMessage(formData: FormData) {
		"use server";
		console.log(formData);
	}

	return (
		<>
			<HeaderMobile className=" self-end p-2" />
			<ThemeSwitcher className=" absolute top-2 left-2" />
			<div className="absolute top-2 right-5">
				<LanguageSelect />
			</div>
			<main className="w-full overflow-y-scroll flex flex-col gap-4">
				<SectionGeneric className="bg-light-blue-primary dark:bg-blue-primary h-lvh flex-shrink-0 flex justify-center items-center flex-col">
					<ImageContainer width="180px" height="180px">
						<Image
							src={ImageProfile}
							priority
							alt="Profile Picture of Ulises Apaza"
							className="rounded-full"
						/>
					</ImageContainer>
					<h1 className="text-4xl text-center">{t("title")}</h1>
					<p className="text-center">{t("subtitle")}</p>
				</SectionGeneric>
				<SectionGeneric className="bg-light-blue-primary dark:bg-blue-primary min-h-lvh flex-shrink-0 p-2 flex flex-col items-center justify-center gap-4">
					<h2>{t("titleAbout")}</h2>
					<p>{t("descriptionAbout")}</p>
					<div className={styles.GridHardSkills}>
						{hardSkills.map((hardSkill) => {
							const Component = hardSkill.component;
							return (
								<div
									key={hardSkill.title}
									className="w-[55px] p-2 h-auto rounded-2xl shadow-md flex justify-center items-center"
								>
									<SVGGenericContainer width="35px" height="35px">
										<Component color={hardSkill.color} />
									</SVGGenericContainer>
								</div>
							);
						})}
					</div>
				</SectionGeneric>
				<SectionGeneric className="flex flex-col min-h-lvh flex-shrink-0 items-center gap-6">
					<h2>{t("titleWork")}</h2>
					{projects.map((project) => (
						<CardWork key={project.titleProjectWork} projectWork={project} />
					))}
				</SectionGeneric>
				<SectionGeneric className="flex flex-col items-center gap-4 p-2 min-h-lvh justify-center">
					<h2>{t("titleContact")}</h2>
					<FormContact sendMessage={sendMessage}></FormContact>
				</SectionGeneric>
			</main>
		</>
	);
}
