import AltInstance from 'lib'
import { compose, range, map, head } from 'ramda'

class ToasterActions {
  toggleToaster(on, closeOnComplete){
    return ({ on, closeOnComplete })
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