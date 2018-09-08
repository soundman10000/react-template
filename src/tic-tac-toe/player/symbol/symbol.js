import React, { Component } from 'react'
import './style.scss'
import { TicTacToeActions } from 'actions'
import { isEmpty } from 'ramda'

export class Symbol extends Component{
  constructor(props){
    super(props)
    this.state = {
      isEdit: false,
      newSymbol: ''
    }
  }

  editSymbol(e){
    this.setState({isEdit: true})
  }

  turnOffEdit(){
    this.setState({ isEdit: false })
  }

  resetSymbol(){
    this.turnOffEdit()
  }

  changeSymbol(){
    TicTacToeActions.updatePlayerSymbol(this.props.Player.id, isEmpty(this.state.newSymbol) ? this.props.Player.name : this.state.newSymbol)
    this.turnOffEdit()
  }

  handleChange(e){
    this.setState({newSymbol: e.target.value})
  }

  renderEdit(){
    return <div>
      <input autofocus="true" defaultValue={ this.props.Player.symbol } onChange={e => this.handleChange(e)} type="text"/>
      <button className="btnConfirm" onClick={ () => this.changeSymbol() }><i className="fa fa-check"></i></button>
      <button className="btnCancel" onClick={ () => this.resetSymbol() }><i className="fa fa-times"></i></button>
    </div>
  }

  renderStatic(){
    return <div onClick={e => this.editSymbol(e)} className="symbol">
      { this.props.Player.symbol }
    </div>
  }


  render(){
    return <div className="symbolContainer">
      { this.state.isEdit ? this.renderEdit() : this.renderStatic() }
    </div>
  }
}