
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/views': path.resolve(__dirname, 'src/views')
    }
  },
  server: {
    proxy: {
      '/v1': {
        target: 'https://3vk8b6ezwa.execute-api.eu-west-3.amazonaws.com/diagnosticTool', // 凡是遇到 /api 路径的请求，都映射到 target 属性
        changeOrigin: true,
        rewrite: path => path.replace(/^\/v1/, '') // 重写 api 为 空，就是去掉它
      }
    }
  },
})
