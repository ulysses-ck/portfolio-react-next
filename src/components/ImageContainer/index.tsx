export default function ImageContainer({
	width = "",
	height = "",
	children,
	className = "",
}: {
	width?: string;
	height?: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			{...{ className }}
			style={{
				width,
				height,
			}}
		>
			{children}
		</div>
	);
}
