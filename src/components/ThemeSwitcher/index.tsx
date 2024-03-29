"use client";
import { useTheme } from "next-themes";
import SVGGenericContainer from "../SVGGenericContainer";
import SVGSun from "../SVGSun";
import SVGMoon from "../SVGMoon";

export default function ThemeSwitcher({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();

	const handleChangeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button
			name="theme-switcher"
			value={theme === "light" ? "Light Theme" : "Dark Theme"}
			className={`shadow-md bg-light-blue-primary dark:bg-blue-primary rounded-full p-2 flex justify-center items-center hover:shadow-outer-shadow-primary-two hover:bg-light-blue-tertiary hover:dark:bg-blue-tertiary hover:dark:shadow-outer-shadow-primary${className || ""}`}
			onClick={handleChangeTheme}
		>
			{theme === "light" ? (
				<SVGGenericContainer width="50px" height="50px">
					<SVGSun color="#000"></SVGSun>
				</SVGGenericContainer>
			) : (
				<SVGGenericContainer width="50px" height="50px">
					<SVGMoon color="#fff"></SVGMoon>
				</SVGGenericContainer>
			)}
		</button>
	);
}
