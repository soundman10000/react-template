import React, { Component } from 'react'
import './style.scss'
import { ToasterStore } from 'stores'
import { ToasterActions } from 'actions'

export class Toaster extends Component{
  constructor(props){
    super(props)
    this.state = ToasterStore.getState()
    this.style = {
      backgroundColor: '#101010',
    }
  }

  componentDidMount(){
    ToasterStore.listen(() => this.onChange())
  }

  componentWillUnmount(){
    ToasterStore.unlisten(() => this.onChange())
  }

  onChange(){
    this.setState(ToasterStore.getState())
    if(this.state.messages.length === 0){
      return
    }

    switch (this.state.messages[this.state.currentMessage - 1].status) {
      case 'SUCCESS':
        this.setStyleColor('#1E5121')
        break
      case 'ERROR':
        this.setStyleColor('#721c24')
        break
      default:
        this.setStyleColor('#101010')
        break
    }

    this.forceUpdate()
  }

  setStyleColor(color){
    this.style = {
      backgroundColor: `${color}`,
    }
  }

  renderMesssages(){
    return this.state.messages.length === 0
      ? <span className="text">No messages.</span>
      : <span className="text">
          <span className="time">[ {this.state.messages[this.state.currentMessage - 1].time.format('MM/DD/YYYY hh:mm:ss')} ]</span>
          { this.state.messages[this.state.currentMessage - 1].message }
        </span>
  }

  render(){
    if(this.state.isOpen) {
        return <div className="toasterContainer" style={this.style}>
        <span className="actions">
          <button className="prevBtn" onClick={() => ToasterActions.changeMessage(false)} ><i className="fa fa-fw fa-chevron-left"/></button>
            {this.state.currentMessage} / {this.state.messages.length}
          <button className="nextBtn" onClick={() => ToasterActions.changeMessage(true)} ><i className="fa fa-fw fa-chevron-right"/></button>
        </span>
        { this.renderMesssages() }
        <button className="closeBtn" onClick={() => ToasterActions.toggleToaster(false, false)} ><i className="fa fa-fw fa-times"/></button>
      </div>
    }

    return null
  }
}