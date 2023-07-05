/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			green: {
				300: 'hsl(150, 100%, 66%)',
				500: 'hsl(193, 38%, 86%)',
			},
			blue: {
				300: 'hsl(218, 23%, 16%)',
				500: 'hsl(217, 19%, 24%)',
				800: 'hsl(217, 19%, 38%)',
			},
		},
		fontFamily: {
			main: ['Manrope', 'sans-serif'],
		},
		extend: {
			dropShadow: {
				accent: ['0 1px 1px rgb(0 0 0 / 0.05)', '0 0 1rem hsl(150, 100%, 66%)'],
			},
		},
	},
	plugins: [],
};
