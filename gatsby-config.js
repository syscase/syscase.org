const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Syscase: A Fuzzing Framework for ARM TrustZone',
    siteUrl: 'https://syscase.org',
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
    'Mdx.frontmatter.author': 'AuthorYaml',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        shouldBlockNodeFromTransformation(node) {
          return (
            ['NPMPackage', 'NPMPackageReadme'].includes(node.internal.type) ||
            (node.internal.type === 'File' &&
              path.parse(node.dir).dir.endsWith('packages'))
          );
        },
        gatsbyRemarkPlugins: [
          'gatsby-remark-embedder',
          'gatsby-remark-graphviz',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 786,
              backgroundColor: '#ffffff',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.5rem',
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-embedder',
          'gatsby-remark-graphviz',
          'gatsby-remark-code-titles',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 786,
              backgroundColor: '#ffffff',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.5rem',
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {
                dosini: 'ini',
                env: 'bash',
                es6: 'js',
                flowchart: 'none',
                gitignore: 'none',
                gql: 'graphql',
                htaccess: 'apacheconf',
                mdx: 'markdown',
                ml: 'fsharp',
                styl: 'stylus',
              },
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
  ],
};
