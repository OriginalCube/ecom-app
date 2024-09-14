export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/image', '@nuxt/icon'],

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

	tailwindcss: { cssPath: '~/assets/css/main.css' },

	axios: {
		baseURL: 'https://fakestoreapi.com', // Used as fallback if no runtime config is provided
	},

	compatibilityDate: '2024-09-10',
})
