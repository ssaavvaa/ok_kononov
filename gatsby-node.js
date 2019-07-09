const path = require(`path`);

exports.createPages = ({boundActionCreators , graphql }) => {
  const { createPage } = boundActionCreators;


    const blogPostTemplate = path.resolve(`src/templates/blog_template.js`)
    // Query for markdown nodes to use in creating pages.
  
  return graphql(`{
            allMarkdownRemark(
              sort: {
                fields: [frontmatter___date]
                order: ASC
              }
            ){
              edges {
                node {
                  html
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM, YYYY")
                  }
                }
              }
            }
          }`).then(result => {
        if (result.errors) {
          return Promise.reject(res.errors);
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path:node.frontmatter.path,
            component: blogPostTemplate
          })
        })
      })
}

 


