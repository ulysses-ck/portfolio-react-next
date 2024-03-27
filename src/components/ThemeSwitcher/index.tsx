"use client";
import { useTheme } from "next-themes";
import SVGGenericContainer from "../SVGGenericContainer";
import SVGSun from "../SVGMoon";
import SVGMoon from "../SVGMoon";

export default function ThemeSwitcher({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();

	const handleChangeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	// TODO write a test e2e for this component
	return (
		<button
			value={theme === "light" ? "Light Theme" : "Dark Theme"}
			className={`shadow-md bg-light-blue-primary dark:bg-blue-primary rounded-full p-2 flex justify-center items-center${className || ""}`}
			onClick={handleChangeTheme}
		>
			{theme === "light" ? (
				<SVGGenericContainer width="50px" height="50px">
					<SVGSun color="#000"></SVGSun>
				</SVGGenericContainer>
			) : (
				<SVGGenericContainer width="50px" height="50px">
					<SVGMoon color="#000"></SVGMoon>
				</SVGGenericContainer>
			)}
		</button>
	);
}
