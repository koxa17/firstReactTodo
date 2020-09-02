import React, {Component} from 'react'

export default class Time extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  updateTime = () => {
    this.timeID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      })
    }, 1000)
  }

  componentDidMount() {
    this.updateTime()
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  render() {
    const time = this.state.time
    return <div style={{fontSize: '1.3rem', fontStyle: 'italic'}}>{time}</div>
  }
}
