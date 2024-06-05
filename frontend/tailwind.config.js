/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
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
