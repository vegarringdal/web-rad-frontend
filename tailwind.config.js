module.exports = {
    mode: "jit",
    content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "../rad-guitools/src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
};
