/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, StaticQuery } from "gatsby"

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
                  <div className="text">
                    <p>Kami membantu klien mengembangkan bisnis yang ramping dan gesit dengan mengurangi <b>biaya</b> dan <b>waktu</b> development sehingga bisa <b>secepatnya release ke pasar dengan biaya yang murah</b></p>
                  </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <h5>Helpful Links</h5>
                <ul className="footer-nav">
                  <li><Link to={'/'}><i className="fa fa-angle-right"/><span>Home</span></Link></li>
                  <li><Link to={'/works'}><i className="fa fa-angle-right"/><span>Portofolio</span></Link></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <h5>Latest Apps</h5>
                <ul className="footer-nav">
                  <li><Link to={'/works/com-yudaprama-cryptoexplorer'}><i className="fa fa-angle-right"/><span>Crypto Watcher</span></Link></li>
                  <li><Link to={'/works/com-yudapramadjunaedi-authorized'}><i className="fa fa-angle-right"/><span>authORIzed</span></Link></li>
                  <li><Link to={'/works/com-yuda-movie'}><i className="fa fa-angle-right"/><span>Movie DB</span></Link></li>
                  <li><Link to={'/works/com-yudapramadjunaedi-inventory'}><i className="fa fa-angle-right"/><span>SIM</span></Link></li>
                  <li><Link to={'/works/com-yudapramadjunaedi-course'}><i className="fa fa-angle-right"/><span>Kursus</span></Link></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <h5>Hubungi Kami</h5>
                <div className="address">
                  <p>Jl Tebet Timur Dalam Raya No 26, Tebet, Jakarta</p>
                  <p>WhatsApp: <a href="https://wa.me/6282123603968?text=Saya ingin bertanya perihal jasa aplikasi">082123603968</a></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p className="copyright">{`© ${new Date().getFullYear()} Gaus. All Rights Reserved.`}</p>
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
