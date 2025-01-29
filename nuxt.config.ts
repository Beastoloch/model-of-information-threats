// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: '2025-02-02',




	runtimeConfig: {
		public: {
			baseUrl: process.env.API_URL,
		},
	},

	app: {
		head: {
			title: 'Pizza',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			link: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/logo.svg',
					sizes: '128x128',
				},
			],
		},
	},

	alias: {
		'@app': '../src/app',
		'@pages': '../src/pages',
		'@widgets': '../src/widgets',
		'@features': '../src/features',
		'@entities': '../src/entities',
		'@shared': '../src/shared',
	},

	devtools: {
		enabled: false,
	},

	typescript: {
		strict: true,
	},

	vue: {
		propsDestructure: true,
	},

	modules: [
		'@nuxt/image',
		'@nuxtjs/i18n',
		'@nuxtjs/color-mode',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@pinia/nuxt',
		'@vee-validate/nuxt',
		'@vueuse/nuxt',
		'shadcn-nuxt',
		'nuxt-snackbar',
		'nuxt-lucide-icons',
	],

	dir: {
		pages: 'src/pages',
		layouts: 'src/app/layouts',
		middleware: 'src/app/middleware',
	},

	components: [
		{
			path: 'src/widgets',
			extensions: ['.vue'],
			prefix: 'Widget',
		},
		{
			path: 'src/features',
			extensions: ['.vue'],
			prefix: 'Feature',
		},
		{
			path: 'src/entities',
			extensions: ['.vue'],
			prefix: 'Entity',
		},
		{
			path: 'src/shared/ui',
			extensions: ['.vue'],
			prefix: 'Ui',
		},
	],

	i18n: {
		vueI18n: './i18n/i18nConfig.ts',
		strategy: 'prefix_except_default',
		baseUrl: process.env.APP_URL,
	},

	tailwindcss: {
		cssPath: 'src/app/style.css',
	},

	googleFonts: {
		display: 'swap',
		prefetch: true,
		preconnect: true,
		preload: true,
		families: {
			Nunito: ['400', '500', '600', '700', '800', '900'],
		},
	},

	lucide: {
		namePrefix: 'Icon',
	},

	snackbar: {
		right: true,
		top: true,
		duration: 2000,
	},
});
