import React from 'react'
import './style.scss'
import Heading from './heading/heading'
import Menu from './menu/menu'
import { Toaster } from './toaster/toaster'

export default React.createClass({
  render(){
    return <div className="container">
        <Heading />
        <Menu />
        {this.props.children}
        <Toaster />
      </div>
  }
})