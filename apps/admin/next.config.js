// const withTM = require("next-transpile-modules")(["components"]);

const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

// module.exports = withTM(nextConfig)
module.exports = nextConfig