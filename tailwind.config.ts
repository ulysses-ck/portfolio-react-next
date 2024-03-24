import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				// dark theme extend
				"blue-primary": "#03090D",
				"blue-secondary": "#0D0F10",
				"blue-tertiary": "#3C40C6",

				// light theme extend
				"light-blue-primary": "#DAEDFC",
				"light-blue-secondary": "#E0E0E0",
				"light-blue-tertiary": "#0BE881",
			},
			boxShadow: {
				// dark theme extend
				"outer-shadow-primary": "0px 0px 25px 1px #3c40c6",

				// dark theme extend
				"outer-shadow-primary-two": "0px 0px 25px 3px #0be881",
			},
		},
	},
	plugins: [],
};
export default config;
