/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                "dark-blue": "#0077B6",
                "light-blue": "#C2F0FF",
                black: "#343A40",
                white: "#FEFCFB"
            }
        }
    },
    plugins: []
}
