import React, {Component} from 'react'

export default class SortPanel extends Component {
  render() {
    return (
      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #ced4da',
          padding: '.375rem .75rem',
          borderRadius: '5px',
        }}>
        <p style={{marginRight: '20px'}}>Сортировать по:</p>
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
          }}>
          <li style={{marginRight: '10px'}}>
            <button className="btn btn-info active">Номеру</button>
          </li>
          <li style={{marginRight: '10px'}}>
            <button className="btn btn-info">Задаче</button>
          </li>
          <li style={{marginRight: '10px'}}>
            <button className="btn btn-info">Времени</button>
          </li>
          <li style={{marginRight: '10px'}}>
            <button className="btn btn-info">Выполнению</button>
          </li>
          <li style={{marginLeft: '15px'}}>
            <button className="btn btn-light">
              Сбросить <img src="reset.png" alt="" />
            </button>
          </li>
        </ul>
      </div>
    )
  }
}
