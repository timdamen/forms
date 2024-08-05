export default defineAppConfig({
  myLayer: {
    name: 'Hello from Forms'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
