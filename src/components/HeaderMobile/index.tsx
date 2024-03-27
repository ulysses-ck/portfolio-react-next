"use client";
// libs
import React, { useState } from "react";
import { useTheme } from "next-themes";
// styles
import styles from "./HeaderMobile.module.css";

// components
import SVGHome from "../SVGHome";
import SVGResume from "../SVGResume";
import SVGWork from "../SVGWork";
import SVGSendEmail from "../SVGSendEmail";
import SVGBars from "../SVGBars";
import SVGCross from "../SVGCross";
import SVGGenericContainer from "../SVGGenericContainer";

interface MenuLink {
	name: string;
	href: string;
	// icon would be a component that has a prop color
	Icon: React.FC<{ color: string }>;
}

export default function HeaderMobile({ className }: { className?: string }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const { theme } = useTheme();

	const components = {
		SVGHome,
		SVGResume,
		SVGWork,
		SVGSendEmail,
	};

	const menu: MenuLink[] = [
		{
			name: "Home",
			href: "#home",
			Icon: components.SVGHome,
		},
		{
			name: "Resume",
			href: "#resume",
			Icon: components.SVGResume,
		},
		{
			name: "Work",
			href: "#work",
			Icon: components.SVGWork,
		},
		{
			name: "Contact",
			href: "#contact",
			Icon: components.SVGSendEmail,
		},
	];

	const handleClickButtonMenu = () => {
		setMenuOpen((prevMenuOpen) => !prevMenuOpen);
	};

	return (
		<header
			className={`flex justify-center items-center relative${className || ""}`}
		>
			<ul
				className={styles.HeaderUlLinks}
				style={{
					display: menuOpen ? "flex" : "none",
				}}
			>
				{menu.reverse().map((link, index) => (
					<li key={index} className="w-fit h-fit">
						<a
							href={link.href}
							className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-light-blue-primary dark:bg-blue-primary shadow-md"
						>
							<SVGGenericContainer width={"25px"} height={"25px"}>
								<link.Icon color={theme === "light" ? "#000" : "#fff"} />
							</SVGGenericContainer>
						</a>
					</li>
				))}
			</ul>
			<button
				value={menuOpen ? "Close" : "Open"}
				onClick={handleClickButtonMenu}
				className="w-[60px] h-[60px] flex items-center justify-center bg-light-blue-primary dark:bg-blue-primary rounded-full shadow-md"
			>
				{menuOpen ? (
					<SVGGenericContainer width={"25px"} height={"25px"}>
						<SVGCross color={theme === "light" ? "#000" : "#fff"} />
					</SVGGenericContainer>
				) : (
					<SVGGenericContainer width={"25px"} height={"25px"}>
						<SVGBars color={theme === "light" ? "#000" : "#fff"} />
					</SVGGenericContainer>
				)}
			</button>
		</header>
	);
}
