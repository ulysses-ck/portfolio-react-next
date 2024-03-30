// i18n
import { useTranslations } from "next-intl";
// next
import dynamic from "next/dynamic";
import Image from "next/image";

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

const LanguageSelect = dynamic(() => import("@/components/LanguageSelect"));

const ThemeSwitcher = dynamic(() => import("@/components/ThemeSwitcher"));

const HeaderMobile = dynamic(() => import("@/components/HeaderMobile"));

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
			<ThemeSwitcher
				name="theme-switcher-mobile"
				className=" absolute top-2 left-2 sm:hidden z-10"
			/>
			<div className="absolute top-2 right-5 sm:hidden z-10">
				<LanguageSelect
					englishTranslation={t("english")}
					languageTranslation={t("language")}
					spanishTranslation={t("spanish")}
				/>
			</div>
			<HeaderDesktop
				englishTranslation={t("english")}
				languageTranslation={t("language")}
				spanishTranslation={t("spanish")}
				classNameHeader=" hidden sm:flex place-self-center px-8"
			/>
			<main className="w-full overflow-y-scroll flex flex-col gap-4 scroll-smooth">
				<SectionGeneric
					className="h-screen flex-shrink-0 flex justify-center items-center flex-col md:flex-row md:gap-10"
					id="home"
				>
					<ImageContainer className="w-44 h-44 sm:w-80 sm:h-80">
						<Image
							src={ImageProfile}
							priority
							alt="Profile Picture of Ulises Apaza"
							className="rounded-full"
						/>
					</ImageContainer>
					<div className="flex flex-col">
						<h1 className="text-4xl text-center">{t("title")}</h1>
						<p className="text-center">{t("subtitle")}</p>
					</div>
				</SectionGeneric>

				<SectionGeneric
					className="min-h-screen flex-shrink-0 p-2 flex flex-col items-center justify-center gap-4"
					id="about"
				>
					<h2 className="text-2xl font-bold">{t("titleAbout")}</h2>
					<p className="px-8 sm:px-24">{t("descriptionAbout")}</p>
					<div className="grid grid-cols-3 gap-7 sm:flex sm:flex-wrap sm:justify-center sm:px-10 md:px-24">
						{Object.keys(hardSkills).map((hardSkill: string) => {
							const Component = hardSkills[hardSkill].Component;
							return (
								<div
									key={hardSkills[hardSkill].title}
									title={hardSkills[hardSkill].title}
									className="bg-light-blue-primary dark:bg-blue-primary p-2 h-auto rounded-2xl shadow-md flex justify-center items-center hover:shadow-outer-shadow-primary-two hover:bg-light-blue-tertiary hover:dark:bg-blue-tertiary hover:dark:shadow-outer-shadow-primary"
								>
									<SVGGenericContainer className=" w-[70px] h-[70px] rounded-2xl mix-blend-multiply dark:mix-blend-lighten overflow-clip">
										<Component color={hardSkills[hardSkill].color}></Component>
									</SVGGenericContainer>
								</div>
							);
						})}
					</div>
				</SectionGeneric>
				<SectionGeneric
					className="flex flex-col min-h-screen flex-shrink-0 items-center justify-center gap-6 px-8 sm:px-24 py-20"
					id="work"
				>
					<h2 className="text-2xl font-bold">{t("titleWork")}</h2>
					{projects.map((project) => (
						<CardWork key={project.titleProjectWork} projectWork={project} />
					))}
				</SectionGeneric>
				<SectionGeneric
					className="flex flex-col items-center gap-4 p-2 min-h-screen justify-center"
					id="contact"
				>
					<h2 className="text-2xl font-bold">{t("titleContact")}</h2>
					<FormContact sendMessage={sendMessage}></FormContact>
				</SectionGeneric>
			</main>
		</>
	);
}
