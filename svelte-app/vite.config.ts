import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const REMOTE_URL = 'http://localhost:3000/';
const allowedFiles = ['.'];

export default defineConfig({
	build: {
		//the size of .svelte-kit/output/client/_app/chunks/editor.api-b5cd19cc.js
		//is 2574.37 KiB. Most likely, there is a way to reduce chunk size via manualChunks
		//or dynamic import
		chunkSizeWarningLimit: 1024 * 3
	},
	server: {
		fs: {
			allow: allowedFiles
		},
		host: 'localhost'
	},
	plugins: [
		svelte(),
		federation({
			name: 'svelte-app',
			remotes: {
				// sharedComponents: "./src/v3/remoteEntry.js",
				sharedComponents: `${REMOTE_URL}/assets/remoteEntry.js`
			},
			shared: ['react', 'react-dom']
		})
	],
	optimizeDeps: {
		exclude: ['@originjs/vite-plugin-federation']
	}
});
