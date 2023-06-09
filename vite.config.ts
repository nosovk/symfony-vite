import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { default as symfonyPlugin } from "vite-plugin-symfony";
import sveltePreprocess from "svelte-preprocess";

export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess({
				postcss: true,
				scss: {
					prependData: '@use "assets/variables.scss" as *;',
				},
			}),
			compilerOptions: {
				customElement: true,
			},
			emitCss: true,
		}),
		symfonyPlugin.default({
			refresh: ["templates/**/*.twig"],
		}),
	],
	build: {
		rollupOptions: {
			input: {
				app: "./assets/app.ts",
				mobileStyles: "./assets/scss/mobile.scss",
				desktopStyles: "./assets/scss/desktop.scss",
				printStyles: "./assets/scss/print.scss",
				webComponents: "./assets/entrypoints/web-components.ts",
			},
		},
	},
	server: {
		origin: "http://localhost:5173", // this used in dev env to determine which origin to inline for static assets
	},
});
