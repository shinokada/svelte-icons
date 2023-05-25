import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess(), preprocess({
		postcss: true
	})],

	kit: {
		adapter: adapter()
	}
};

export default config;
