import AltInstance from 'lib'
import { TicTacToeActions } from 'actions'

class TicTacToeStore {
  constructor(){
    let {addTask, removeTask } = TicTacToeActions

    this.bindListeners({
      add: addTask,
      remove: removeTask
    })

    this.state = new Set()
  }

  add(task){
    return this.setState(this.state.add(task))
  }

  remove(taskId){
    console.log('todo');
  }
}

export default AltInstance.createStore(TicTacToeStore)