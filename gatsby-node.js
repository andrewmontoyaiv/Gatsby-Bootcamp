const path = require('path')

// Runs when a new node is created. fields is added to the node
module.exports.onCreateNode = ({ node, actions }) => {

    // Object destructuring
    const { createNodeField } = actions;
    // console.log(node)

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');

    // Note: this functions returns a promise (use then, or async/await)
    // const res = await graphql(`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({ 
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,

            // extra data provided
            context: {
                slug: edge.node.slug
            }
         })
    })


    // 1. get path to template
    // 2. get markdown data
    // 3. create new pages
}

