/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.blubits.me`,
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
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
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
