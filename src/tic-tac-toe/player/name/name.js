import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'
import { isNil, isEmpty } from 'ramda'

export class Name extends Component{
  constructor(props){
    super(props)
    this.state = {
      isEdit: false,
      newName: '',
    }
  }

  editName(e){
    this.setState({isEdit: true})
  }

  turnOffEdit(){
    this.setState({isEdit: false})
  }

  resetName(){
    this.turnOffEdit()
  }

  changeName(){
    TicTacToeActions.updatePlayerName(this.props.Player.id, isEmpty(this.state.newName) ? this.props.Player.name : this.state.newName)
    this.turnOffEdit()
  }

  handleChange(e){
    this.setState({newName: e.target.value})
  }

  renderUnderline(){
    if (this.props.IsCurrentPlayer){
      return <span className="underline"></span>
    }
  }

  renderStatic(){
    return <div><h4 onClick={ e => this.editName(e) } className={ this.props.PlayerIsWinner ? 'bannerWin' : 'banner' }>
        { this.props.Player.name }
      </h4>
      { this.renderUnderline() }
      </div>
  }

  renderEdit(){
    return <h4 className='banner'>
        <input maxLength="20" autofocus="true" defaultValue={ this.props.Player.name } onChange={e => this.handleChange(e)} type="text"/>
        <button className="btnConfirm" onClick={ () => this.changeName() }><i className="fa fa-check"></i></button>
        <button className="btnCancel" onClick={ () => this.resetName() }><i className="fa fa-times"></i></button>
      </h4>
  }

  render(){
    return <div className="nameContainer">
      { this.state.isEdit ? this.renderEdit() : this.renderStatic() }
    </div>
  }
}