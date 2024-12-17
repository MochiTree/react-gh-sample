import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // process.env.NODE_ENV 是抓取目前環境狀態(開發/上線)的意思
  // production是上線(產品)環境
  base:process.env.NODE_ENV==='production' ? '/react-gh-sample/' : '/',
  plugins: [react()],
})
