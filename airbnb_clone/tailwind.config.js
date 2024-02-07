/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      colors: {
        'airbnb-red': '#FF5A60',
      },
    },
	},
	plugins: [],
};

