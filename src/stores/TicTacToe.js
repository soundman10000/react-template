import AltInstance from 'lib'
import { TicTacToeActions } from 'lib'

class TicTacToeStore {
  constructor(){
    // let {addTask, removeTask } = Actions
    //
    // this.bindListeners({
    //   add: addTask,
    //   remove: removeTask
    // })
    //
    // this.state = new Set()
  }

  add(task){
    return this.setState(this.state.add(task))
  }

  remove(taskId){
    console.log('todo');
  }
}

export default AltInstance.createStore(TicTacToeStore)