// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SHOE-STORE/', // Tên repository của bạn
  plugins: [react()]
})
