"use client";
// react
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// styles
import styles from "./LanguageSelect.module.css";

// Components
import SVGChevron from "../SVGChevron";
import SVGGenericContainer from "../SVGGenericContainer";

import { useRouter } from "next/navigation";

export default function LanguageSelect({
	className,
	englishTranslation,
	languageTranslation,
	spanishTranslation,
	...props
}: {
	className?: string;
	englishTranslation: string;
	languageTranslation: string;
	spanishTranslation: string;
}) {
	const [menuLanguageOpen, setMenuLanguageOpen] = useState(false);
	const { theme } = useTheme();
	const router = useRouter();

	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	const handleOpenMenuLanguage = () => {
		setMenuLanguageOpen((prevMenuLanguageOpen) => !prevMenuLanguageOpen);
	};

	const handleChangeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
		const language = (e.target as HTMLButtonElement).value;
		router.replace(`/${language}`);
	};

	return (
		<div className={`${className || ""}w-fit h-fit relative`}>
			<button
				onClick={handleOpenMenuLanguage}
				value={menuLanguageOpen ? "Close" : "Open"}
				className={`shadow-md rounded-md p-2 bg-light-blue-primary dark:bg-blue-primary flex justify-around items-center hover:shadow-outer-shadow-primary-two hover:bg-light-blue-tertiary hover:dark:bg-blue-tertiary hover:dark:shadow-outer-shadow-primary`}
			>
				<span>{languageTranslation}</span>
				<SVGGenericContainer width="16px" height="16px">
					<SVGChevron
						color={theme === "dark" ? "white" : "black"}
						degree={menuLanguageOpen ? 0 : 90}
					/>
				</SVGGenericContainer>
			</button>
			<ul
				className={`shadow-md rounded-md p-2 bg-light-blue-primary dark:bg-blue-primary w-full ${styles.LanguageSelectUl}`}
				style={{
					display: menuLanguageOpen ? "flex" : "none",
				}}
			>
				<li>
					<button onClick={handleChangeLanguage} value="en">
						{englishTranslation}
					</button>
				</li>
				<li>
					<button onClick={handleChangeLanguage} value="es">
						{spanishTranslation}
					</button>
				</li>
			</ul>
		</div>
	);
}
