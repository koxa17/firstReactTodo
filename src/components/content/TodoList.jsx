import React, {Component} from 'react'

const Task = ({tasks, onChange}) => {
  return tasks.map((task, idx) => {
    const liDone = {
      bg: {
        background: task.completed === true && '#28a745',
        borderColor: task.completed === true && '#28a745',
      },
      text: {
        textDecoration: task.completed === true && 'line-through',
      },
      btn: {
        background: task.completed === true && '#6c757d',
        borderColor: task.completed === true && '#6c757d',
      },
    }

    return (
      <li
        key={`${task.id}-${task.title}`}
        className="input-group todo-item"
        style={{boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)', borderRadius: '5px'}}
        data-id={task.id}>
        <span className="form-control" style={liDone.bg}>
          <span className="d-flex justify-content-between align-items-center">
            <span className="info">
              <input
                type="checkbox"
                name="todoItem"
                className="todo-checkbox"
                data-name="btn-done"
                checked={task.completed}
                onChange={e => {
                  onChange.bind(null, e)
                }}
              />
              <span className="todo-text" style={liDone.text}>
                {idx + 1}. {task.title}
              </span>
            </span>
            <span className="todo-time">{task.timeOfСreation}</span>
          </span>
        </span>
        <div className="input-group-append">
          <button
            className="btn btn-danger"
            type="button"
            data-name="btn-del"
            style={liDone.btn}>
            &times;
          </button>
        </div>
      </li>
    )
  })
}

export default class TodoList extends Component {
  controlPanel = e => {
    const parent = e.target.closest('li')
    const nameControle = e.target.dataset.name
    const id = +parent.dataset.id

    if (nameControle === 'btn-del') {
      this.props.delTodo(id)
    } else if (nameControle === 'btn-done') {
      this.props.doneTodo(id)
    }
  }

  render() {
    return (
      <ul className={'todo-list'} onClick={this.controlPanel}>
        <Task tasks={this.props.todos} onChange={this.controlPanel} />
      </ul>
    )
  }
}
