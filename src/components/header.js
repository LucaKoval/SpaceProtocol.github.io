import React, { Component } from 'react'
import _ from 'lodash'

const LINKS = Object.freeze({
  'About': {name: 'Login', key: 'ABOUT', href: '/about'},
  'Projects': {name: 'Tagging', key: 'PROJECTS', href: '/projects'}
})

class Header extends Component {
  render() {
    const linksToShow = LINKS
    return (
      <div>
        <nav>
          <div className="red nav-wrapper">
            <div className="brand-logo" style={{marginLeft:10}}>
              <a href="#"><img src={require('../img/cuair_logo.png')}/></a>
            </div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {
                _.map(linksToShow, key => {
                  const link = LINKS[key]
                  return (
                    <li className={window.location.pathname === link.href ? 'active' : ''} key={link.key}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  )
                }
                )}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
