import AltInstance from 'lib'

class TicTacToeActions {
  addTask(content) { this.dispatch({ id: 'jason', content})}
  removeTask(taskId) {this.dispatch(taskId)}
}

export default AltInstance.createActions(TicTacToeActions)