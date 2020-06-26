import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = props => {
  return <div id="content">{props.children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
