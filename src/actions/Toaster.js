import AltInstance from 'lib'
import { compose, range, map, head } from 'ramda'

class ToasterActions {
  toggleToaster(on){
    return on
  }

  message(message, status){
    return ({
      status: status,
      message: message,
    })
  }

  changeMessage(forward){
    return forward
  }
}

export default AltInstance.createActions(ToasterActions)