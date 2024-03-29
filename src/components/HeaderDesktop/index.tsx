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
		{ href: "#about", label: "About" },
		{ href: "#work", label: "Work" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<header
			className={`flex flex-col items-center gap-6 justify-center${classNameHeader}`}
		>
			<nav className="w-fit h-fit">
				<ul className="flex flex-col items-center gap-8">
					{linksNav.map((link) => (
						<li key={link.href} className="w-fit h-fit">
							<a
								className="shadow-md rounded-[30px] bg-light-blue-primary dark:bg-blue-primary hover:shadow-outer-shadow-primary-two hover:bg-light-blue-tertiary hover:dark:bg-blue-tertiary hover:dark:shadow-outer-shadow-primary p-2"
								href={link.href}
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<LanguageSelect />
			<ThemeSwitcher />
		</header>
	);
}
