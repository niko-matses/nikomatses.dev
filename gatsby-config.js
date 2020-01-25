module.exports = {
  siteMetadata: {
    title: `Niko Matses - Front-End Engineer`,
    description: `I'm a full-stack dev focused on mobile-first responsive design. My approach advocates Design Thinking and User Experience planning to ensure that the best possible product gets built.`,
    author: `Niko Matses`,
    siteUrl: 'https://zen-knuth-62eed5.netlify.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
        name: `nikomatses.dev`,
        short_name: `niko-dev`,
        start_url: `/`,
        background_color: `teal`,
        theme_color: `teal`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },

    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify', //Make sure to put this last
  ],
};
