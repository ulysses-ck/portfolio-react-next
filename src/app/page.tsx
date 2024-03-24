"use client";
import { useTheme } from "next-themes";

export default function Home() {
	const { theme, setTheme } = useTheme();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 transition-all duration-500 dark:bg-blue-tertiary">
			<button onClick={() => setTheme("dark")}>Dark</button>
			<button onClick={() => setTheme("light")}>Light</button>
			<button onClick={() => setTheme("system")}>System</button>
		</main>
	);
}
