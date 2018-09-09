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
    switch (this.state.messages[this.state.currentMessage - 1].status) {
      case 'SUCCESS':

        this.setStyleColor('#1E5121')
        console.log(this.style);
        break
      case 'ERROR':
        this.setStyleColor('#101010')
        break
      default:
        console.log('here');
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
    console.log(this.style);
    if(this.state.isOpen) {
        return <div className="toasterContainer" style={this.style}>
        <span className="actions">
          <button className="prevBtn"><i className="fa fa-fw fa-chevron-left"/></button>
            {this.state.currentMessage} / {this.state.messages.length}
          <button className="nextBtn"><i className="fa fa-fw fa-chevron-right"/></button>
        </span>
        { this.renderMesssages() }
        <button className="closeBtn" onClick={() => ToasterActions.toggleToaster(false)} ><i className="fa fa-fw fa-times"/></button>
      </div>
    }

    return null
  }
}