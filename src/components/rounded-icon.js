import React from "react"
import PropTypes from "prop-types"

const RoundedIcon = ({src}) => {
  return (
    <div className="icon">
      <img
        style={{width:75, height:75, borderRadius:'25%'}}
        src={src}
        className="img-fluid"
        alt="" />
    </div>
  )
}

RoundedIcon.propTypes = {
  src: PropTypes.string,
}

export default RoundedIcon
