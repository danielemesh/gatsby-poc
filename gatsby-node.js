const fetch             = require('node-fetch');
const createNodeHelpers = require('gatsby-node-helpers').default;
const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');

const {
        createNodeFactory,
        generateNodeId,
        generateTypeName,
      } = createNodeHelpers({
  typePrefix: `PaginatedPosts`,
});

const POST_TYPE = 'Post';

const PostNode = createNodeFactory(POST_TYPE, node => {
  
  return node;
});

exports.sourceNodes = async ({boundActionCreators}) => {
  const {createNode} = boundActionCreators;
  // Create nodes here, generally by downloading data
  // from a remote API.
  const response = await fetch('http://jsonplaceholder.typicode.com/posts/?userId=1');
  const posts    = await response.json();
  
  // Process data into nodes.
  posts.forEach(post => {
    const postNode = PostNode(post);
    createNode(postNode);
  });
  
  // We're done, return.
  return;
};

exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
  const {createNodeField} = boundActionCreators;
  
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({node, getNode, basePath: 'pages'});
    
    createNodeField({
      node,
      name : 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({graphql, boundActionCreators}) => {
  const { createPage } = boundActionCreators;
  
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      });
      resolve();
    });
  });
};