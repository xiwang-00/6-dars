/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				body: '#FAFAFA',
				bodyDark: '#202C36',
				otherDark: '#2B3844',
			},
			fontFamily: {
				nunito: ['Nunito Sans'],
			},
			width: {
				input: '480px',
			},
		},
	},
	plugins: [],
};
