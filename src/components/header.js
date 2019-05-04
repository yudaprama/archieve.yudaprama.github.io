import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, headerWhite }) => (
  <header className={`header-area ${headerWhite ? 'header-white' : ''}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className="main-nav">
            <Link to="/" className="logo">
              <img src="../images/orange-logo-white.svg" className="light-logo" alt="Gaus"/>
              <img src="../images/orange-logo-dark.svg" className="dark-logo" alt="Gaus"/>
            </Link>
            <ul className="nav">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/works">PORTOFOLIO</Link></li>
              <li><Link to="orange-contact.html" className="btn-nav-line">HUBUNGI KAMI</Link></li>
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
  headerWhite: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  headerWhite: false,
}

export default Header
