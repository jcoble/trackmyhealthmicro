import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
// import path from 'path';

// const DEPLOY_API = 'https://$DEPLOY_API' // e.g. 'https://vue-ssg-api.jamstacks.net'
// const USE_DEV_PROXY = true // Change to use CORS-free dev proxy at: http://localhost:3000/api
// const DEV_API = 'http://localhost:5000/api'
// const isProd = process.env.NODE_ENV === 'production'
// const buildLocal = command === 'build' && mode === 'development'
// const API_URL = isProd ? DEPLOY_API : (USE_DEV_PROXY || buildLocal ? '' : DEV_API)
let command = '';
const DEPLOY_API = 'https://$DEPLOY_API'; // e.g. 'https://vue-ssg-api.jamstacks.net'
const USE_DEV_PROXY = true; // Change to use CORS-free dev proxy at: http://localhost:3000/api
const DEV_API = 'http://localhost:5000/api';

const isProd = process.env.NODE_ENV === 'production';
const buildLocal = command === 'build' && mode === 'development';
const API_URL = isProd ? DEPLOY_API : USE_DEV_PROXY || buildLocal ? '' : DEV_API;


// @ts-ignore
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true
        })
    ],
    define: {API_URL: `"${API_URL}"`},
    kit: {
        adapter: adapter({
            fallback: 'index.html',
        }),
        prerender: {
            enabled: false,
        }
    }
};

export default config;
