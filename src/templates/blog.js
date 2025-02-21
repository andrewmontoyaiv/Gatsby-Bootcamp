import { useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderRichText } from "gatsby-source-contentful/rich-text" 
import Head from '../components/head'

// $slug comes from the context from when we created the page
// the response is provided as a prop down below

// export const query = graphql`
// query(
//     $slug:String!
//   ) {
//     markdownRemark (
//       fields:{
//         slug:{
//           eq:$slug
//         }
//       }
//     ) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }`

export const query = graphql`
  query(
    $slug:String!
  ) {
    contentfulBlogPost (
      slug: {
        eq: $slug
      }
    ) {
      title
      publishedDate(
        formatString: "MMMM Do YYYY"
      )
      body {
        raw
      }
    }
  }`





const Blog = (props) => {
    // const options = {
    //   nodeType: {
    //     "embedded-asset-block": (node) => {

    //       const alt = node.data.target.fields.title['en-us']
    //       const url = node.data.target.fields.file[en-us].url
    //       return <img alt={alt} src={url}/>
    //     }
    //   }
    // }

    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title}></Head>

            {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>
            </div> */}

            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {/* {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)} */}
            {renderRichText(props.data.contentfulBlogPost.body)}

            {/* <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>
            </div> */}

        </Layout>
    )
}
export default Blog