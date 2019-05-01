import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className="main-nav">
            <a href="orange-index.html" className="logo">
              <img src="../images/orange-logo-white.svg" className="light-logo" alt="Gaus"/>
              <img src="../images/orange-logo-dark.svg" className="dark-logo" alt="Gaus"/>
            </a>
            <ul className="nav">
              <li><a href="orange-index.html">HOME</a></li>
              <li><a href="orange-our-work.html">OUR WORK</a></li>
              <li><a href="orange-about-us.html">ABOUT US</a></li>
              <li><a href="orange-services.html">SERVICES</a></li>
              <li><a href="orange-blog.html">BLOG</a></li>
              <li><a href="orange-contact.html" className="btn-nav-line">CONTACT</a></li>
            </ul>
            <a className='menu-trigger'>
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
