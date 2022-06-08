import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true
        })
    ],
    kit: {
        adapter: adapter(),
        alias: {
            // '$root': path.resolve('src'),
            $components: path.resolve('src/lib/components'),
            $elements: path.resolve('src/lib/elements'),
            $forms: path.resolve('src/lib/forms'),
            $utils: path.resolve('src/lib/utils'),
            $shared: path.resolve('src/lib/shared')
        }
    }
};

export default config;
