import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from 'path'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue({
    template: { transformAssetUrls }
  }), quasar({
    sassVariables: path.resolve('src/css/quasar-variables.sass')
  }), cloudflare()]
})