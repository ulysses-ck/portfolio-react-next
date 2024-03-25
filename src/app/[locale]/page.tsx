import { useTranslations } from "next-intl";

import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("@/components/ThemeSwitcher"));

export default function Index() {
	const t = useTranslations("IndexPage");
	return (
		<main>
			<h1>{t("title")}</h1>
			<ThemeSwitcher />
		</main>
	);
}
