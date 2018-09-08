import React, { Component } from 'react'
import './style.scss'

export class Name extends Component{
  constructor(props){
    super(props)
    this.state = {
      isEdit: false
    }
  }

  editName(e){
    this.setState({nameEdit: true})
  }

  saveName(e){
    this.setState({nameEdit: false})
  }

  render(){
    return <div className="nameContainer">
      { this.state.isEdit
        ? <h4 className='banner'><input onBlur={() => this.saveName()} type="text"/></h4>
        : <h4 onClick={ () => this.editName() } className={ this.props.PlayerIsWinner ? 'bannerWin' : 'banner' }>
            <span className= { this.props.IsCurrentPlayer ? 'underline' : 'text' }>{ this.props.Player.name }</span>
          </h4>
      }
    </div>
  }
}