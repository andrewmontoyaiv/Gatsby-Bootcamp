import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

// Apply styles
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header></Header>
                {props.children}
            </div>
            <Footer></Footer>
        </div>
    )
}



export default Layout