export default function SVGChevron({
	color,
	degree = 0,
}: {
	color: string;
	degree?: number;
}) {
	return (
		<svg
			style={{ transform: `rotate(${degree}deg)` }}
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="24" height="24" fill="none" />
			<path
				d="M17 9.5L12 14.5L7 9.5"
				stroke={color}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
