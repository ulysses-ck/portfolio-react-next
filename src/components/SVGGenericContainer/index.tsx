import styles from "./SVGGenericContainer.module.css";

export default function SVGGenericContainer({
	width,
	height,
	className = "",
	children,
}: {
	width?: string;
	height?: string;
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<div
			className={`${styles.SVGGenericContainer}${className}`}
			style={{ width, height }}
		>
			{children}
		</div>
	);
}
