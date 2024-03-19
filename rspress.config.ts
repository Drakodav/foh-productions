import * as path from "path";
import { defineConfig } from "rspress/config";

const isProd = process.env.NODE_ENV === "prod";

const base = isProd ? "foh-productions/" : "/";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "foh-productions",
  description: "Stay tuned!",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  base: base,
  builderConfig: {
    output: {
      assetPrefix: base,
    },
  },
  themeConfig: {
    lastUpdated: true,
    footer: {
      message: "© 2024 Front of House Productions",
    },
    socialLinks: [
      //
    ],
  },
});
