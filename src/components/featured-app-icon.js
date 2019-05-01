import React from "react"
import PropTypes from "prop-types"
import RoundedIcon from "./rounded-icon"

const FeaturedAppIcon = ({src}) => {
  return (
    <a href="orange-app-single.html" className="app-item">
      <RoundedIcon src={src} />
    </a>
  )
}

FeaturedAppIcon.propTypes = {
  src: PropTypes.string,
}

export default FeaturedAppIcon
