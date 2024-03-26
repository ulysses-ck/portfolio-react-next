export default function SVGOpenExternal({ color }: { color: string }) {
	return (
		<svg
			fill={color}
			width="800px"
			height="800px"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14 3.5L8.5 9 7 7.5 12.5 2H10V0h6v6h-2V3.5zM6 0v2H2v12h12v-4h2v6H0V0h6z"
				fill-rule="evenodd"
			/>
		</svg>
	);
}
