import React from 'react'
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from 'gatsby'

import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const contentfulPosts = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
            sort:{
                fields:publishedDate
                order:DESC
            }
            ) {
            edges {
                node {
                title
                slug
                publishedDate(formatString:"MMMM Do, YYYY")
                }
            }
            }
        }
    `)

    // const posts = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                         date
    //                     }
    //                     html
    //                     excerpt
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }`)

    return (
        <div>
            <Layout>
                <Head title="Blogs"></Head>
                <h1>Blog</h1>
                <ol className={blogStyles.posts}>
                    {contentfulPosts.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )  
                    })}
                    <li>
                        <h2></h2>
                    </li>
                </ol>
            </Layout>

            {/* <Layout>
                <h1>Blog</h1>
                <ol className={blogStyles.posts}>
                    {posts.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )  
                    })}
                    <li>
                        <h2></h2>
                    </li>
                </ol>
            </Layout> */}
            

        </div>
    )
}

export default BlogPage