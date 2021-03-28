import { Link } from "gatsby"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => {
  return (
    <div className="Header">
      <div className="HeaderGroup">
        <Link to="/">
          <img src={require("../images/logo.png")} alt="" width="30" />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy">
          <button>Buy</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
