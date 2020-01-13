const {resolve, join} = require('path');

module.exports = async ({graphql, actions}) => {
  const templatePath = '../src/templates';
  const templates = {
    docs: resolve(__dirname, join(templatePath, 'docs.js')),
    blog: resolve(__dirname, join(templatePath, 'blog.js')),
  };

  const entriesQuery = await graphql(
    `
      {
        allMarkdownRemark(limit: 10000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  );

  if (entriesQuery.errors) {
    console.error(entriesQuery.errors);
    throw Error(entriesQuery.errors);
  }

  entriesQuery.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug;

    Object.entries(templates)
      .filter(([key]) => slug.includes(`${key}/`))
      .forEach(([key, template]) => {
        actions.createPage({
          path: slug,
          component: template,
          context: {
            slug,
          },
        });
      });
  });
};
