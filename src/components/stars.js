import React from "react"

const max = 100;
const min = 10;

const Stars = props => {
  return (
    <ul className="stars">
      <li><i className="fa fa-star active"/></li>
      <li><i className="fa fa-star active"/></li>
      <li><i className="fa fa-star active"/></li>
      <li><i className="fa fa-star active"/></li>
      <li><i className="fa fa-star"/></li>
      <li>{`(${Math.floor(Math.random() * (max - min + 1)) + min})`}</li>
    </ul>
  )
}

export default Stars
