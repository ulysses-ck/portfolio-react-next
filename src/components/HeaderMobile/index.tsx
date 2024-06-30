"use client";
// libs
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
// styles
import styles from "./HeaderMobile.module.css";

// components
import SVGGenericContainer from "../SVGGenericContainer";
import { IoMdHome, IoMdPaper } from "react-icons/io";
import { MdOutlineEmail, MdOutlineWork } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

interface MenuLink {
	name: string;
	href: string;
	// icon would be a component that has a prop color
	Icon: React.FC<{ color: string }>;
}

export default function HeaderMobile({ className }: { className?: string }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const { theme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	const components = {
		IoMdHome,
		IoMdPaper,
		MdOutlineWork,
		MdOutlineEmail,
	};

	const menu: MenuLink[] = [
		{
			name: "Home",
			href: "#home",
			Icon: components.IoMdHome,
		},
		{
			name: "About",
			href: "#about",
			Icon: components.IoMdPaper,
		},
		{
			name: "Work",
			href: "#work",
			Icon: components.MdOutlineWork,
		},
		{
			name: "Contact",
			href: "#contact",
			Icon: components.MdOutlineEmail,
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
							className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-light-blue-primary dark:bg-blue-primary shadow-md hover:shadow-outer-shadow-primary-two hover:bg-light-blue-tertiary hover:dark:bg-blue-tertiary hover:dark:shadow-outer-shadow-primary"
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
				className="w-[60px] h-[60px] flex items-center justify-center bg-light-blue-primary dark:bg-blue-primary rounded-full shadow-md hover:shadow-outer-shadow-primary-two hover:bg-light-blue-tertiary hover:dark:bg-blue-tertiary hover:dark:shadow-outer-shadow-primary"
			>
				{menuOpen ? (
					<SVGGenericContainer width={"25px"} height={"25px"}>
						<ImCross color={theme === "light" ? "#000" : "#fff"} />
					</SVGGenericContainer>
				) : (
					<SVGGenericContainer width={"25px"} height={"25px"}>
						<FaBars color={theme === "light" ? "#000" : "#fff"} />
					</SVGGenericContainer>
				)}
			</button>
		</header>
	);
}
