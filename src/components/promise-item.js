import React from "react"
import PropTypes from "prop-types"

const PromiseItem = ({title, description, icon}) => {
  return (
    <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s">
      <div className="count">
        <span>
          <i className={`fa ${icon}`} />
        </span>
      </div>
      <div className="text">
        <h5 className="title">{title}</h5>
        <p>{description}</p>
      </div>
    </li>
  )
}

PromiseItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default PromiseItem
