export const state = () => ({
 list: []
});

export const mutations = {
  addTodo(state, todo) {
    state.list.push(todo)

  },
  removeTodo(state, todoId) {
    state.list = state.list.filter(todo => todo.id !== todoId)
  },
  clearTodos(state) {
    state.list = []
  },
  removeMe(state) {
    state.list.shift()
  }
};