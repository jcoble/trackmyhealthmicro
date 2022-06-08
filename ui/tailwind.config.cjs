module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    // add daisyUI theme
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    // daisyUI config (optional)
    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        themes: [
            {
                dark: {
                    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
                    primary: "#2487e5",
                    "primary-focus": "#1669bb",
                    "primary-content": "#ffffff",
                    secondary: "#fb8fd6",
                    "secondary-focus": "#cc76ad",
                    "secondary-content": "#ffffff",

                    accent: "#b6b3f7",
                    "accent-focus": "#837ecc",
                    "accent-content": "#ffffff",
                    warning: "#fe6d31",
                    "warning-content": "#9f4319",
                    info: "#9091fc",
                    error: "#EA718CFF",
                    "error-content": "#ab3652",
                    success: "#36d399",
                    neutral: "#0a0a1c",
                    "neutral-focus": "#0a0a13",
                    "neutral-content": "#a6adba",
                    "base_100": "#0d1025",
                    "base_200": "#060623",
                    "base_300": "#01010c",

                    "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
                    "--animation-btn": "0.25s", // duration of animation when you click on button
                    "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    "--btn-text-case": "uppercase", // set default text transform for buttons
                    "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    "--border-btn": "1px", // border width of buttons
                    "--tab-border": "1px", // border width of tabs
                }
            }],
        darkTheme: "dark"
    },
    base: true,
    utils: true,
    logs: true,
    rtl: false,


}
