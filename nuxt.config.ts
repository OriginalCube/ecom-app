export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxt/image',
		'@nuxt/icon',
		'@pinia/nuxt',
		'@nuxtjs/device',
	],

	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/ui',
	},

	pinia: {
		storesDirs: ['./stores/**'],
	},

	tailwindcss: { cssPath: '~/assets/css/main.css' },

	compatibilityDate: '2024-09-10',
	runtimeConfig: {
		public: {
			baseURL: import.meta.env.API_ENDPOINT,
		},
	},
})
