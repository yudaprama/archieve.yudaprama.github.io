import React from "react"
import PropTypes from "prop-types"

const FeaturedAppIcon = ({src}) => {
  return (
    <a href="orange-app-single.html" className="app-item">
      <div className="icon">
        <img
          style={{width:75, height:75, borderRadius:'25%'}}
          src={src}
          className="img-fluid"
          alt="" />
      </div>
    </a>
  )
}

FeaturedAppIcon.propTypes = {
  src: PropTypes.string,
}

export default FeaturedAppIcon
