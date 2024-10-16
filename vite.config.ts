import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SHOE-STORE/', // Đường dẫn này phải đúng với tên repository của bạn trên GitHub
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/SHOE-STORE/src/main.tsx'], // Đảm bảo Rollup không cố gắng xử lý nhầm tệp này
    },
  },
});
