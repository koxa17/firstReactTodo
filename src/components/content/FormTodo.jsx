import React, {Component} from 'react'

export default class FormTodo extends Component {
  state = {
    title: '',
  }

  getTitle = e => {
    this.setState({title: e.target.value})
  }

  add = e => {
    e.preventDefault()
    if (!this.state.title) {
      const input = e.target.querySelector('input')
      input.style.boxShadow = '0 0 0 .2rem red'
      setTimeout(() => {
        input.style.boxShadow = ''
      }, 2000)
      return false
    }
    const todo = {
      completed: false,
      title: this.state.title,
    }
    this.props.addTodo(todo)
    e.target.reset()
    this.setState({title: ''})
  }

  render() {
    return (
      <form className={'form-todo'} onSubmit={this.add}>
        <div
          className="input-group"
          style={{
            boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.75)',
            borderRadius: '5px',
          }}>
          <input
            type="text"
            className="form-control"
            placeholder="Название задачи"
            style={{height: '50px'}}
            onInput={this.getTitle}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Добавить
            </button>
          </div>
        </div>
      </form>
    )
  }
}
