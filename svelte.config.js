import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const repo = 'YOUR_REPO_NAME';

export default {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            // build to 'docs' so GH Pages can serve from there (no actions needed)
            pages: 'docs',
            assets: 'docs',
            // SPA fallback so dynamic routes work on hard-refresh
            fallback: '404.html',
            precompress: false,
            strict: true
        }),
        paths: {
            // IMPORTANT for GitHub Pages subpath
            base: dev ? '' : `/${repo}`
        }
    }
};
