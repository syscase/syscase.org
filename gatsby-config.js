'use strict';

module.exports = {
  siteMetadata: {
    title: 'Syscase: A Fuzzing Framework for ARM TrustZone',
    siteUrl: 'https://syscase.org'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ]
}
