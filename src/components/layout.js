/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children, headerWhite }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header headerWhite={headerWhite} siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <img src="../images/orange-logo-white.svg" className="logo" alt=""/>
                  <div className="text">Morbi convallis bibendum urna ut viverra. Maecenas quis
                    consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet
                    ullamcorper phasellus semper.
                  </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <h5>Helpful Links</h5>
                <ul className="footer-nav">
                  <li><a href="#"><i className="fa fa-angle-right"/><span>Our Work</span></a>
                  </li>
                  <li><a href="#"><i className="fa fa-angle-right"/><span>About Us</span></a>
                  </li>
                  <li><a href="#"><i className="fa fa-angle-right"/><span>Services</span></a>
                  </li>
                  <li><a href="#"><i className="fa fa-angle-right"/><span>Blog</span></a></li>
                  <li><a href="#"><i className="fa fa-angle-right"/><span>Contact</span></a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <h5>Latest Apps</h5>
                <ul className="footer-nav">
                  <li><a href="#"><i className="fa fa-angle-right"/><span>Dance School</span></a>
                  </li>
                  <li><a href="#"><i className="fa fa-angle-right"/><span>Coiner</span></a></li>
                  <li><a href="#"><i className="fa fa-angle-right"/><span>Cloud Manager</span></a></li>
                  <li><a href="#"><i className="fa fa-angle-right"/><span>Coding Life</span></a>
                  </li>
                  <li><a href="#"><i className="fa fa-angle-right"/><span>Smart Office</span></a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <h5>Contact Us</h5>
                <div className="address">
                  <p>455 West Orchard Street<br/>Kings Mountain, NC 28086</p>
                  <p>Phone: (272) 211-7370</p>
                  <p><span>E-Mail:</span><a href="#">support@yourbrand.com</a></p>
                  <ul className="social">
                    <li><a href="#"><i className="fa fa-facebook-square"/></a></li>
                    <li><a href="#"><i className="fa fa-twitter-square"/></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-square"/></a></li>
                    <li><a href="#"><i className="fa fa-google-plus-square"/></a></li>
                    <li><a href="#"><i className="fa fa-github-square"/></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p className="copyright">© 2018 Gaus. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerWhite: PropTypes.bool,
}

Layout.defaultProps = {
  headerWhite: false,
}

export default Layout
