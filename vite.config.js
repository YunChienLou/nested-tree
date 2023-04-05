import { defineConfig } from "vite";
// import vuePugPlugin from 'vue-pug-plugin'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
