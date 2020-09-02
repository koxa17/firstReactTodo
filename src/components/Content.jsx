import React, {Component} from 'react'
import FormTodo from './content/FormTodo'
import TodoList from './content/TodoList'

const TODOS = [
  {
    id: 1,
    title: 'Купить корм',
    completed: false,
    timeOfСreation: new Date().toLocaleTimeString(),
  },
  {
    id: 2,
    title: 'Купить хлеб',
    completed: true,
    timeOfСreation: new Date().toLocaleTimeString(),
  },
  {
    id: 3,
    title: 'Купить молоко',
    completed: false,
    timeOfСreation: new Date().toLocaleTimeString(),
  },
]

function addId() {
  return TODOS.length ? TODOS[TODOS.length - 1].id + 1 : 1
}

function searchItem(id) {
  return TODOS.find(item => {
    return item.id === id
  })
}

export default class Content extends Component {
  state = {
    todos: TODOS,
  }

  addTodo = todo => {
    todo.id = addId()
    todo.timeOfСreation = new Date().toLocaleTimeString()
    TODOS.push(todo)
    this.setState({todos: TODOS})
  }

  delTodo = id => {
    const deleteItem = searchItem(id)
    TODOS.splice(TODOS.indexOf(deleteItem), 1)
    this.setState({todos: TODOS})
  }

  doneTodo = id => {
    TODOS.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
    })
    this.setState({todos: TODOS})
  }

  render() {
    return (
      <section className={'content'}>
        <FormTodo addTodo={this.addTodo} />
        <TodoList todos={TODOS} delTodo={this.delTodo} doneTodo={this.doneTodo} />
      </section>
    )
  }
}
