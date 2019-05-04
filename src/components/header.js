import { Link } from "gatsby"
import React, { Component } from "react"
import PropTypes from "prop-types"

class Header extends Component {
  state = {
    showMenu: false
  }
  render() {
    return (
      <header className={`header-area ${this.props.headerWhite ? 'header-white' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img src="/images/orange-logo-white.svg" className="light-logo" alt="Gaus"/>
                  <img src="/images/orange-logo-dark.svg" className="dark-logo" alt="Gaus"/>
                </Link>
                <ul className="nav" style={this.state.showMenu ? {display: "block"} : null}>
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/works">SEMUA PORTOFOLIO</Link></li>
                  <li><a onClick={()=> {
                    this.setState({showMenu:!this.state.showMenu})
                    window.scrollTo(0,document.body.scrollHeight)
                  }} className="btn-nav-line">HUBUNGI KAMI</a></li>
                </ul>
                <a onClick={() => this.setState({showMenu:!this.state.showMenu})} className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  headerWhite: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  headerWhite: false,
}

export default Header
