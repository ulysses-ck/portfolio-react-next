"use client";
// react
import { useState } from "react";
import { useTheme } from "next-themes";

// styles
import styles from "./LanguageSelect.module.css";

// Components
import SVGChevron from "../SVGChevron";
import SVGGenericContainer from "../SVGGenericContainer";

export default function LanguageSelect({
	className,
	...props
}: {
	className?: string;
}) {
	const [menuLanguageOpen, setMenuLanguageOpen] = useState(false);
	const { theme } = useTheme();

	const handleOpenMenuLanguage = () => {
		setMenuLanguageOpen((prevMenuLanguageOpen) => !prevMenuLanguageOpen);
	};

	const handleChangeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
		const language = (e.target as HTMLButtonElement).textContent;
		console.log(language);
	};

	return (
		<div className={`${className || ""}w-fit h-fit relative`}>
			<button
				onClick={handleOpenMenuLanguage}
				value={menuLanguageOpen ? "Close" : "Open"}
				className={`shadow-md rounded-md p-2 bg-light-blue-primary dark:bg-blue-primary flex justify-around items-center`}
			>
				<span>Language</span>
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
					<button onClick={handleChangeLanguage}>English</button>
				</li>
				<li>
					<button onClick={handleChangeLanguage}>Spanish</button>
				</li>
			</ul>
		</div>
	);
}
