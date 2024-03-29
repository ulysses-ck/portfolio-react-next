import { ThemeProvider } from "next-themes";

export default function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className="flex h-screen overflow-hidden bg-light-blue-secondary dark:bg-blue-secondary">
				<ThemeProvider attribute="class">{children}</ThemeProvider>
			</body>
		</html>
	);
}
