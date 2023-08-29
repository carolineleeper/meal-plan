/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"ctd-orange": "#D58E67",
				"ctd-blue": "#90BDDD",
				"ctd-green": "#9AE3DF",
			},
			gridTemplateRows: {
				7: "repeat(7, minmax(0, 1fr))",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			dropShadow: {
				"ctd-shadow": "4px 4px 0px 0px rgba(0, 0, 0, 1)",
			},
		},
	},
	plugins: [],
};
