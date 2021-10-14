import { defineConfig } from 'vite'
const preprocess = require('svelte-preprocess')
import { svelte } from '@sveltejs/vite-plugin-svelte'


export default defineConfig((command, mode) => {
	const isProduction = mode === 'production'

	return {
		plugins: [svelte({
			preprocess: preprocess({ sourceMap: !isProduction }),
			hot: !isProduction,
			emitCss: true
		})]
	}
})