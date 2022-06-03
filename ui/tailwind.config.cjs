const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    daisyui: {
        themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
        mytheme: {
            "primary": "#437477ff",
            "secondary": "##774643",
            "accent": "#774374",
            "neutral": "#132122",
            "base-100": "#435f77",
            "info": "#436a77",
            "success": "#8bf0f6",
            "warning": "#747743",
            "error": "#774643",
        }
    },

    plugins: [require('@tailwindcss/forms'), require('daisyui')]
};

module.exports = config;
