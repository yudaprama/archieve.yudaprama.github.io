import React from "react"
import PropTypes from "prop-types"

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
                <li><a href="orange-index.html">Home</a></li>
                <li><a href="orange-our-work.html">Our Work</a></li>
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
