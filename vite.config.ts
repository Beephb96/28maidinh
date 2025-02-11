import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // Các biến cần thiết từ Ant Design có thể được thay đổi tại đây
          '@primary-color': '#1DA57A',
          '@border-color': '#d9d9d9',
        },
        javascriptEnabled: true, // Bật tính năng JavaScript trong LESS
      },
    },
  },
})
