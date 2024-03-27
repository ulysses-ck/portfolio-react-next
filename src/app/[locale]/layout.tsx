import { ThemeProvider } from "next-themes";

export default function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html lang={locale}>
			<body className="flex h-lvh overflow-hidden bg-light-blue-primary dark:bg-blue-primary">
				<ThemeProvider attribute="class">{children}</ThemeProvider>
			</body>
		</html>
	);
}
