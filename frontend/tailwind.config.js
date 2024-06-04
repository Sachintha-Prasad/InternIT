/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                "dark-blue": "#0077B6",
                "light-blue": "#C2F0FF",
                "dark-gray": "#343A40",
                "light-gray": "#888888",
                white: "#FFFFFF",
                cream: "#FFFDEF"
            },

            container: {
                center: true,
                padding: "2rem"
            },

            screens: {
                mobile: "425px",
                tablet: "836px"
            }
        }
    },
    plugins: []
}
