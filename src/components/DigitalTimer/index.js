// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {isTimerStart: false}

  timerStarted = () => {
    this.setState(prevState => {
      const {isTimerStart} = prevState
      return {
        istimerStart: !isTimerStart,
      }
    })
  }

  render() {
    const {isTimerStart} = this.state
    console.log(isTimerStart)
    return (
      <div className="bg-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="timer-main-container">
          <div className="timer-show-container">
            <div className="timer-update-container">
              <h1>25:00</h1>
              <p>Paused</p>
            </div>
          </div>
          <div className="button-and-limit-container">
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.timerStarted}
              >
                <img
                  src={
                    isTimerStart
                      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                  }
                  alt={isTimerStart ? 'play icon' : 'pause icon'}
                  className="image"
                />
              </button>
              <p>{isTimerStart ? 'Paused' : 'Start'}</p>
              <button type="button" className="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="image"
                />
              </button>
              <p>Reset</p>
            </div>
            <p>Set Timer Limit</p>
            <div className="timer-set-container">
              <button type="button" className="limit-set-button">
                -
              </button>
              <p className="limit-paragraph">25</p>
              <button type="button" className="limit-set-button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
