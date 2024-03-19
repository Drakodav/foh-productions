import * as path from "path";
import { defineConfig } from "rspress/config";

const isDev = process.env.DEV_ENV === "development";

const base = isDev ? "/" : "foh-productions/";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "foh-productions",
  description: "Stay tuned!",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
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
