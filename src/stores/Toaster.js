import AltInstance from 'lib'
import { ToasterActions } from 'actions'
import Moment from 'moment'
import { assoc } from 'ramda'

class ToasterStore {
  constructor(){
    this.state = {
      messages: [],
      isOpen: false,
      currentMessage: 1,
    }

    this.bindListeners({
      toggleToaster: ToasterActions.TOGGLE_TOASTER,
      message: ToasterActions.MESSAGE,
      changeMessage: ToasterActions.CHANGE_MESSAGE,
    })
  }

  message(msg){
    this.state.messages.push(assoc('time', new Moment())(msg))
    this.toggleToaster({on: true, closeOnComplete: true})
  }

  changeMessage(forward){
    if(forward){
      if(this.state.messages.length >= this.state.currentMessage + 1){
        this.state.currentMessage++
      }
      return
    }

    if(0 < this.state.currentMessage - 1){
      this.state.currentMessage--
    }
  }

  toggleToaster({on, closeOnComplete}){
    this.state.isOpen = on
    if(!this.state.isOpen){
      return
    }

    this.state.currentMessage = this.state.messages.length

    if(closeOnComplete){
      var close = c => _ => {
        c.state.isOpen = false
        c.emitChange()
      }
      setTimeout(close(this), 2500);
    }
  }
}

export default AltInstance.createStore(ToasterStore)