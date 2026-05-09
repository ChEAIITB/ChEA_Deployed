import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss(),],
  server: {
    // 1. Allow any host (or specify your ngrok domain)
    allowedHosts: ['b4e6-2405-201-a408-7098-d5d7-a61a-3458-f3f6.ngrok-free.app'], // Use '.ngrok-free.app' for better security
    
    // 2. Configure HMR to use the ngrok tunnel
    hmr: {
      clientPort: 443, // Force HMR to use the standard HTTPS port
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
