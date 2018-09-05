import React from 'react'
import './style.scss'

export class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value
    }
  }

  checkBox(value){
    this.setState({value})
  }

  render(){
    return (
      <button onClick={() => this.checkBox('X')} className="square">
        {this.state.value}
      </button>
    )
  }
}