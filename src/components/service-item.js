import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const ServiceItem = ({title, description, icon}) => {
  return (
    <Link to={'/'} className="home-services-item" data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s">
      <i className={`fa ${icon}`} />
      <h5 className="services-title">{title}</h5>
      <p>{description}</p>
    </Link>
  )
}

ServiceItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
}

export default ServiceItem
