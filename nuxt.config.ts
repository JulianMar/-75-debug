// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-bugsnag'],
  bugsnag: {
    publishRelease: true,
    config: {
      apiKey: process.env.NUXT_BUGSNAG_KEY,
      enabledReleaseStages: ['local', 'production'],
      releaseStage: process.env.APP_ENV,
    },
  },
});
