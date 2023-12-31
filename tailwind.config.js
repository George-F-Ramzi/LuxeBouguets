/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-gilroy)"],
			},
			borderColor: {
				default: "#121212",
			},
			colors: {
				black: "#121212",
				para: "#2A2A2A",
			},
		},
	},
	plugins: [],
};
