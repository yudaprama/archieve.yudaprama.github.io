import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CoverDetailApp = ({appTitle}) => {
  return (
    <div className="cover" data-image="assets/images/photos/parallax.jpg">
      <div className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{appTitle}</h1>
            </div>
            <div className="col-lg-12 text-center">
              <ol className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                {appTitle === "Semua Portofolio" ? null : <li><Link to="/works">Semua Portofolio</Link></li>}
                <li className="active">{appTitle}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CoverDetailApp.propTypes = {
  appTitle: PropTypes.string,
}

export default CoverDetailApp
