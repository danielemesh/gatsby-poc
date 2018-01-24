module.exports = {
  pathPrefix: '/gatsby-poc',
  siteMetadata: {
    title: 'AT&T',
  },
  plugins     : [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: {prefixes: [`/app/*`, `/gatsby-poc/app/*`]},
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/`,
      },
    }
  ],
};