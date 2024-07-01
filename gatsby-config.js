/**
 * @type {import('gatsby').GatsbyConfig}
 */

// TODO: make theme-color dynamic
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.blubits.me",
    title: "@blubits"
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blubits.me`,
        short_name: `blubits.me`,
        start_url: `/`,
        background_color: `#f3f4f6`,
        theme_color: `#f3f4f6`,
        display: `standalone`,
        icon: 'src/images/favicon-ty.png',
        icons: [
          {
            src: `src/images/favicon-ty.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon-sm.png`,
            sizes: `64x64`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon-md.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon-lg.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ]
}
