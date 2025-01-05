/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                'lato': ['Lato', 'sans-serif'],
                'open-sans': ['Open Sans', 'sans-serif'],
                'source-sans-3': ['Source Sans 3', 'sans-serif']
            }
        }
    },
    plugins: []
}