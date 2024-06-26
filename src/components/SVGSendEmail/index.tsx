export default function SVGSendEmail({ color }: { color: string }) {
	return (
		<svg
			width="800px"
			height="800px"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M44 24V9H24H4V24V39H24"
				stroke={color}
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M44 34L30 34"
				stroke={color}
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M39 29L44 34L39 39"
				stroke={color}
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4 9L24 24L44 9"
				stroke={color}
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
