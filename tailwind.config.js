/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ['inter', 'Helvetica', ...defaultTheme.fontFamily.sans,],
		}
	},
	plugins: [],
}
