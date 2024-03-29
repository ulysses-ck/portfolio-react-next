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
import HeaderDesktop from "@/components/HeaderDesktop";

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
			<div className="w-fit h-fit absolute bottom-2 left-5 block sm:hidden z-10">
				<HeaderMobile className=" self-end p-2 sm:hidden" />
			</div>
			<ThemeSwitcher className=" absolute top-2 left-2 sm:hidden z-10" />
			<div className="absolute top-2 right-5 sm:hidden z-10">
				<LanguageSelect />
			</div>
			<HeaderDesktop classNameHeader=" hidden sm:flex place-self-center px-8" />
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
									title={hardSkill.title}
									className="p-2 h-auto rounded-2xl shadow-md flex justify-center items-center hover:shadow-outer-shadow-primary-two hover:bg-light-blue-tertiary hover:dark:bg-blue-tertiary hover:dark:shadow-outer-shadow-primary"
								>
									<SVGGenericContainer width="70px" height="70px">
										<Component color={hardSkill.color} />
									</SVGGenericContainer>
								</div>
							);
						})}
					</div>
				</SectionGeneric>
				<SectionGeneric className="flex flex-col min-h-lvh flex-shrink-0 items-center gap-6 sm:px-24">
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
