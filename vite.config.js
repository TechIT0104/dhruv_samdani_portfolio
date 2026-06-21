import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Second design ("Grand Line") — deployed as a GitHub *project* page at
// https://techit0104.github.io/dhruv_samdani_portfolio/  → base must match the repo name.
// For local dev/preview this is harmless.
export default defineConfig({
  plugins: [react()],
  base: '/dhruv_samdani_portfolio/',
})
