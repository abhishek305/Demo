module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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

    {
      resolve: `gatsby-source-contentstack`,
      options: {
        // API Key is a unique key assigned to each stack. This is required.
        api_key: `blt74a459c57a383bbf`,
  
        // Delivery Token is a read-only credential . This is required.
        delivery_token: `cs978bc9d98fcc6e3d14b2abb9`,
        
        // Environment where you published your data.
        environment: `demo`,
  
        //CDN set this to point to other cdn end point. For eg: https://eu-cdn.contentstack.com/v3 . This is not required.
        cdn: "https://stag-cdn.contentstack.io/v3"
      },
    },
  ],
}
