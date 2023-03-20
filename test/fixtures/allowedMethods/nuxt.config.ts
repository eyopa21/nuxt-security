import MyModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  security: {
    allowedMethodsRestricter: ['POST']
  }
})