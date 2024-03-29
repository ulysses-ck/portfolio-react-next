"use client";
import React from "react";

// components
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSelect from "../LanguageSelect";

export default function HeaderDesktop({
	classNameHeader = "",
}: {
	classNameHeader?: string;
}) {
	const linksNav = [
		{ href: "#home", label: "Home" },
		{ href: "#resume", label: "About" },
		{ href: "#work", label: "Work" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<header
			className={`flex flex-col items-center gap-6 justify-center${classNameHeader}`}
		>
			<nav className="w-fit h-fit">
				<ul className="flex flex-col items-center gap-6">
					{linksNav.map((link) => (
						<li
							key={link.href}
							className="shadow-md rounded-[30px] p-2 bg-light-blue-primary dark:bg-blue-primary"
						>
							<a href={link.href}>{link.label}</a>
						</li>
					))}
				</ul>
			</nav>
			<LanguageSelect />
			<ThemeSwitcher />
		</header>
	);
}
