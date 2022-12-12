import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
const { defineConfig } = require('vite')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'login.html'),
        changepassword: resolve(__dirname, 'wijzig_wachtwoord.html')
      }
    }
  }
})
