module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}"
	],
	// No parâmetro safelist podemos utilizar regex para definir quais classes não sofreram purge na build.
	safelist: [
		"text-2xl",
		"text-3xl",
		{
			pattern: /(^bg-)|(^from-)|(^to-)/,
			variants: ["lg", "hover", "focus", "lg:hover"],
		},
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
