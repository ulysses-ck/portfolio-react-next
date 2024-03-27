import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import SectionGeneric from "@/components/SectionGeneric";
import ImageContainer from "@/components/ImageContainer";
import Image from "next/image";
import ImageProfile from "../../../public/profile-photo.jpg";

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

	return (
		<>
			<HeaderMobile className=" self-end p-2" />
			<ThemeSwitcher className=" absolute top-2 left-2" />
			<div className="absolute top-2 right-2">
				<LanguageSelect />
			</div>
			<main className="w-full overflow-y-scroll flex flex-col">
				<SectionGeneric className=" bg-light-blue-primary dark:bg-blue-primary h-lvh flex-shrink-0 flex justify-center items-center flex-col">
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
			</main>
		</>
	);
}
