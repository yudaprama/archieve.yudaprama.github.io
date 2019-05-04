import React from "react"
import PropTypes from "prop-types"
import RoundedIcon from "./rounded-icon"
import { Link } from "gatsby"

const FeaturedAppIcon = ({src, to}) => {
  return (
    <Link to={`/works/${to}`} className="app-item">
      <RoundedIcon src={src} />
    </Link>
  )
}

FeaturedAppIcon.propTypes = {
  src: PropTypes.string,
}

export default FeaturedAppIcon
