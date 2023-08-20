import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <nav  className="navbar navbar-expand-lg navbar-dark ">
        <div className="container px-lg-5">
          <div style={{ margin: "0 auto" }} className="header_content ">
            <a  style={{color :"grey"}}className="navbar-brand" href="#!">
              SHOE SHOP
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
