export default function SectionGeneric({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return <section {...{ className }}>{children}</section>;
}
