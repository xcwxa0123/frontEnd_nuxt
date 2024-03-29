// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    css: [
        "primevue/resources/themes/lara-light-blue/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css",
        "/assets/public-style.css"
    ],
	build: {
		transpile: ["primevue"]
	},
    sourcemap: {
        server: true,
        client: true
    },
    serverHandlers: [
        { method: '/api/getChatCompletions', handler: '~/server/middleware/textStream.ts' }
    ]
})
