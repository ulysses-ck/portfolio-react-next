export default function SectionGeneric({
	children,
	className = "",
	id = "",
}: {
	children: React.ReactNode;
	className?: string;
	id?: string;
}) {
	return <section {...{ className, id }}>{children}</section>;
}
