const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
};

// TODO: figure out why you can't import this from the utils file
const generateSlug = (str) => {
  const safeCharacterList = /[^\w-]/gi;
  const slug = str.toLowerCase().replace(/\s/gi, '-').replace(safeCharacterList, '');
  return slug;
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          nodes {
            fields {
              contentType
              slug
            }
            frontmatter {
              template
            }
          }
        }
        tagsGroup: allMarkdownRemark(
          limit: 2000
          filter: { fields: { contentType: { eq: "posts" } } }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
        categoriesGroup: allMarkdownRemark(
          limit: 2000
          filter: { fields: { contentType: { eq: "posts" } } }
        ) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
        allPlayMyCollectionCsv(
          limit: 1000
        ) {
          nodes {
            Title
            Gameplay
            Gameplay_Comment
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const tags = result.data.tagsGroup.group;
  const categories = result.data.categoriesGroup.group;
  const allMarkdownNodes = result.data.allMarkdownRemark.nodes;
  const allGameNodes = result.data.allPlayMyCollectionCsv.nodes;

  const blogMarkdownNodes = allMarkdownNodes.filter(
    (node) => node.fields.contentType === `posts`
  );

  const pageMarkdownNodes = allMarkdownNodes.filter(
    (node) => node.fields.contentType === `pages`
  );

  if (blogMarkdownNodes.length > 0) {
    blogMarkdownNodes.forEach((node, index) => {
      let prevSlug = null;
      let nextSlug = null;

      if (index > 0) {
        prevSlug = blogMarkdownNodes[index - 1].fields.slug;
      }

      if (index < blogMarkdownNodes.length - 1) {
        nextSlug = blogMarkdownNodes[index + 1].fields.slug;
      }

      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve(`./src/templates/post-template.js`),
        context: {
          slug: `${node.fields.slug}`,
          prevSlug: prevSlug,
          nextSlug: nextSlug,
        },
      });
    });
  }

  if (pageMarkdownNodes.length > 0) {
    pageMarkdownNodes.forEach((node) => {
      // set unique slug for about page
      const slug = `${node.fields.slug}`;

      if(slug.includes('about/README')) {
        createPage({
          path: `/about`,
          component: path.resolve(`src/templates/about-template.js`),
          context: {
            slug: `${node.fields.slug}`,
          },
        });
      }
      else {
        // createPage({
        //   path: `${node.fields.slug}`,
        //   component: path.resolve(`src/templates/index-template.js`),
        //   context: {
        //     slug: `${node.fields.slug}`,
        //   },
        // });
      }
    });
  }

  if (allGameNodes.length > 0) {
    allGameNodes.forEach((game) => {
      const slug = generateSlug(game.Title);
      
      createPage({
        path: `/play/${slug}`,
        component: path.resolve(`src/templates/game-template.js`),
        context: {
          slug: `${slug}`,
          title: `${game.Title}`
        }
      });
    });

  }

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${toKebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/tags-template.js`),
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  categories.forEach((category) => {
    createPage({
      path: `/categories/${toKebabCase(category.fieldValue)}/`,
      component: path.resolve(`./src/templates/categories-template.js`),
      context: {
        category: category.fieldValue,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
    });

    const fileNode = getNode(node.parent);

    createNodeField({
      node,
      name: `contentType`,
      value: fileNode.sourceInstanceName,
    });

    if (fileNode.sourceInstanceName === 'posts') {
      createNodeField({
        name: `slug`,
        node,
        value: `/blog${relativeFilePath}`,
      });
    }

    if (fileNode.sourceInstanceName === 'pages') {
      createNodeField({
        name: `slug`,
        node,
        value: relativeFilePath,
      });
    }
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      template: String
      tags: [String!]
    }

    type Fields {
      slug: String
      contentType: String
    }
  `);
};
