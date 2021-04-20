import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export let base = "/country_api/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
});
