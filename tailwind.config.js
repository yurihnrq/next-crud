module.exports = {
	purge: {
		content: [
			"./src/pages/**/*.{js,ts,jsx,tsx}", 
			"./src/components/**/*.{js,ts,jsx,tsx}"
		],
		// No parâmetro safelist podemos utilizar regex para definir quais classes não sofreram purge na build.
		safelist: [
			/^bg-/,
			/^from-/,
			/^to-/
		]
	},
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
