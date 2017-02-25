import React from 'react'

const Header = (props) => {

  return (
    <header id="header" className="alt">
      <span className="logo"><img src="images/logo.svg" alt="" /></span>
      <h1>HTML to React</h1>
      <p>Conversion of an HTML template to React components.<br />
      Tim Handy.</p>
    </header>
  )
}

module.exports = Header
