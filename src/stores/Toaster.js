import AltInstance from 'lib'
import { ToasterActions } from 'actions'
import Moment from 'moment'
import { assoc } from 'ramda'

class ToasterStore {
  constructor(){
    this.state = {
      messages: [],
      isOpen: false,
      currentMessage: 0,
    }

    this.bindListeners({
      toggleToaster: ToasterActions.TOGGLE_TOASTER,
      message: ToasterActions.MESSAGE,
    })
  }

  message(msg){
    this.state.messages.push(assoc('time', new Moment())(msg))
    this.toggleToaster(true)
  }

  toggleToaster(on){
    this.state.isOpen = on
    if(!this.state.isOpen){
      return
    }

    this.state.currentMessage = this.state.messages.length
  }
}

export default AltInstance.createStore(ToasterStore)