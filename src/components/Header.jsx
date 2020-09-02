import React, {Component} from 'react'
import Time from './header/Time'

export default class Header extends Component {
  render() {
    return (
      <header className={'bg-info header'}>
        <h1>ToDo:</h1>
        <Time />
      </header>
    )
  }
}
