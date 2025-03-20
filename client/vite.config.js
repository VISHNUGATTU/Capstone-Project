import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  envPrefix: 'VITE_' , // Ensures environment variables with 'VITE_' are correctly loaded
})
