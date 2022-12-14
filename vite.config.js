import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        nested: 'login.html',
        changepassword: 'wijzig_wachtwoord.html'
      }
    }
  }
})