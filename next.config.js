
const path = require("path");
/**
 * @type {import("next").NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "~": path.resolve(__dirname),
        },
      },
    };
    // Important: return the modified config
    return config;
  },
};