import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const indexPage = () => {
  // React component
  return (
    <div>
      <Layout>
        <Head title='Home'></Head>
        {/* entire page refresh */}
        {/* <p>Need a developer? <a href="/contact">Contact Me</a></p> */}

        <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        <p>Go to <Link to="/blog">Blog</Link></p>
        <a href="https://www.twitter.com" target="_blank">Twitter</a>
      </Layout>



    </div>
  )
}

export default indexPage