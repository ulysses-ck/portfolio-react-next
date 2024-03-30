"use client";
import { useTheme } from "next-themes";
import SVGGenericContainer from "../SVGGenericContainer";
import SVGSun from "../SVGSun";
import SVGMoon from "../SVGMoon";
import { useEffect, useState } from "react";

export default function ThemeSwitcher({
	className,
	name,
}: {
	className?: string;
	name: string;
}) {
	const { theme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	const handleChangeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button
			name={name}
			value={theme === "light" ? "Light Theme" : "Dark Theme"}
			className={`shadow-md bg-light-blue-primary dark:bg-blue-primary rounded-full p-2 flex justify-center items-center hover:shadow-outer-shadow-primary-two hover:bg-light-blue-tertiary hover:dark:bg-blue-tertiary hover:dark:shadow-outer-shadow-primary${className || ""}`}
			onClick={handleChangeTheme}
		>
			<SVGGenericContainer width="50px" height="50px">
				{theme !== "light" ? <SVGMoon color="#fff" /> : <SVGSun color="#000" />}
			</SVGGenericContainer>
		</button>
	);
}
