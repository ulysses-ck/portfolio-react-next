"use client";
import { useTheme } from "next-themes";
import SVGGenericContainer from "@/components/SVGGenericContainer";
import SVGSun from "@/components/SVGSun";
import SVGMoon from "@/components/SVGMoon";

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	const handleChangeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	// TODO write a test e2e for this component
	// TODO write a story for this component
	return (
		<button
			value={theme === "light" ? "Light Theme" : "Dark Theme"}
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
