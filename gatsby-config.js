module.exports = {
  siteMetadata: {
    title: `Jasa Pembuatan Aplikasi Mobile Android iOS`,
    description: `Jasa Aplikasi Mobile Yang Murah dan Cepat, Berkualitas Tinggi, Berpengalaman`,
    author: `yuda prama`,
    keywords: ["Jasa pembuatan aplikasi Android", "Jasa pembuatan aplikasi iOS", "jasa pembuatan aplikasi mobile", "mobile app developer indonesia", "Android app developer", "iOS app developer", "Mobile app designer", "Jakarta", "Indonesia"]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
