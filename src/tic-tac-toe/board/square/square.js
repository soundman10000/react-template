import React from 'react'
import './style.scss'
import Alt from 'lib'

export class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value
    }
  }

  render(){
    return (
      <button onClick={() => this.props.click()} className="square">
        {this.props.value}
      </button>
    )
  }
}