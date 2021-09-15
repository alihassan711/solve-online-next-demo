import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import SubHeader from './SubHeader'

export default function Layout(props) {
    return (
        <Fragment>
            <Header />
            <SubHeader />
            <div className="container">
                {props.children}
                <Footer />
            </div>
        </Fragment>
    )
}
