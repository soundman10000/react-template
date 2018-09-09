import React from 'react'
import './style.scss'
import { Link } from 'react-router'
import { ToasterActions } from 'actions'
import "font-awesome/scss/font-awesome.scss";

export default React.createClass({
  render() {
    return <div className="menu">
      <Link className="home" to=""><i className="fa fa-fw fa-home"></i></Link>
      <Link className="item" activeClassName="active" to="ttt"><span>Tic Tac Toe</span></Link>
      <span className="right">
      <button onClick={() => ToasterActions.toggleToaster(true)} className="toasterOpen">
        <i className="fa fa-envelope" />
      </button>
      </span>
    </div>
  }
})
