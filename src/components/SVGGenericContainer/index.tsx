import styles from "./SVGGenericContainer.module.css";

export default function SVGGenericContainer({
	width,
	height,
	children,
}: {
	width: string;
	height: string;
	children: React.ReactNode;
}) {
	return (
		<div className={styles.SVGGenericContainer} style={{ width, height }}>
			{children}
		</div>
	);
}
