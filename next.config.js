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
            loader: "@vercel/webpack-asset-relocator-loader",
            options: {
              outputAssetBase: "assets",
              existingAssetNames: [],
              wrapperCompatibility: true,
              escapeNonAnalyzableRequires: true,
            },
          },
        })
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options)
      }
      return config
    },
  })
}

const conf = {
  // target: "serverless",
  env: {
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    DB_URL: process.env.DB_URL,
    FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    FB_MESSENGER_SENDER_ID: process.env.FB_MESSENGER_SENDER_ID,
    FB_APP_ID: process.env.FB_APP_ID,
    FB_API_KEY: process.env.FB_API_KEY,
    WORDPRESS_ENDPOINT: process.env.WORDPRESS_ENDPOINT,
  },
  async rewrites() {
    return [
      // French Routes
      {
        source: "/notre-concept",
        destination: "/about",
      },
      {
        source: "/nos-produits/:product",
        destination: "/products/:product",
      },
      {
        source: "/fraiches-news/fraiche/:fresh",
        destination: "/blog/:fresh",
      },
      {
        source: "/fraiches-news",
        destination: "/blog",
      },
      {
        source: "/boutique",
        destination: "https://shop.smoothiestamarindo.com",
      },
      {
        source: "/espace-pro",
        destination: "/pro",
      },
      {
        source: "/connexion",
        destination: "/signin",
      },
      {
        source: "/inscription",
        destination: "/signup",
      },

      // English Routes
      {
        source: "/our-concept",
        destination: "/about",
      },
      {
        source: "/our-products/:product",
        destination: "/products/:product",
      },
      {
        source: "/fresh-news/fresh/:fresh",
        destination: "/blog/:fresh",
      },
      {
        source: "/fresh-news",
        destination: "/blog",
      },
      {
        source: "/shop",
        destination: "https://shop.smoothiestamarindo.com",
      },

      // Italian Routes
      {
        source: "/concetto",
        destination: "/about",
      },
      {
        source: "/prodotti/:product",
        destination: "/products/:product",
      },
      {
        source: "/notizie-fresche/fresca/:fresh",
        destination: "/blog/:fresh",
      },
      {
        source: "/notizie-fresche",
        destination: "/blog",
      },
      {
        source: "/negozio",
        destination: "https://shop.smoothiestamarindo.com",
      },
      {
        source: "/sezione-pro",
        destination: "/pro",
      },
      {
        source: "/connessione",
        destination: "/signin",
      },
      {
        source: "/iscrizione",
        destination: "/signup",
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/nos-produits",
        destination: "/nos-produits/ultra-violet",
        permanent: false,
      },
      {
        source: "/our-products",
        destination: "/our-products/ultra-violet",
        permanent: false,
      },
      {
        source: "/prodotti",
        destination: "/prodotti/ultra-violet",
        permanent: false,
      },
    ]
  },
}

module.exports = withAssetRelocator(conf)
