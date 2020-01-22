const withAssetRelocator = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options

      if (isServer) {
        config.node = Object.assign({}, config.node, {
          __dirname: false,
          __filename: false,
        })

        config.module.rules.unshift({
          test: /\.(m?js|node)$/,
          parser: { amd: false },
          use: {
            loader: '@zeit/webpack-asset-relocator-loader',
            options: {
              outputAssetBase: 'assets',
              existingAssetNames: [],
              wrapperCompatibility: true,
              escapeNonAnalyzableRequires: true,
            },
          },
        })
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }
      return config
    },
  })
}

const conf = {
  target: 'serverless',
  env: {
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    DB_URL: process.env.DB_URL,
    FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    FB_MESSENGER_SENDER_ID: process.env.FB_MESSENGER_SENDER_ID,
    FB_APP_ID: process.env.FB_APP_ID,
  },
}

module.exports = withAssetRelocator(conf)