//import adapter from '@sveltejs/adapter-cloudflare';
//import vercel from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-auto';

import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
		      // if true, will deploy the app using edge functions
		      // (https://vercel.com/docs/concepts/functions/edge-functions)
		      // rather than serverless functions
		      edge: false,

		      // an array of dependencies that esbuild should treat
		      // as external when bundling functions
		      external: [],

		      // if true, will split your app into multiple functions
		      // instead of creating a single one for the entire app
		      split: false
		})
	},
};

export default config;
