import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

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
			<main className="w-full">
				<h1>{t("title")}</h1>
			</main>
		</>
	);
}
