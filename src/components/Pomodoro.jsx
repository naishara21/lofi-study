import React, { Component } from 'react';
import SetTimer from './SetTimer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faSync, faPause } from '@fortawesome/free-solid-svg-icons';
import './styles/pomodoro.css'

class Pomodoro extends Component{

  state = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25 * 60,
    currentTimer: 'Session',
    isPlaying: false,
    loop: undefined
  };

  constructor(props) {
    super(props);
    this.loop = undefined;
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  // Convert count to time
  convertToTime = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;

    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;

    return `${minutes}:${seconds}`;
  }

  // Handle change in session length and break length
  handleLengthChange = (count, timerType) => {
    const {
      sessionCount,
      breakCount,
      isPlaying,
      currentTimer
    } = this.state;

    let newCount;

    // Update the new count
    if (timerType === 'session') {
      newCount = sessionCount + count;
    } else {
      newCount = breakCount + count;
    }

    // Update the session count and break count
    if (newCount > 0 && newCount < 61 && !isPlaying) {
      this.setState({
        [`${timerType}Count`]: newCount
      });

      // Update the clock count to time derived by new count in seconds
      if (currentTimer.toLowerCase() === timerType) {
        this.setState({
          clockCount: newCount * 60
        });
      }
    }
  }

  // To handle play/pause event
  handlePlayPause = () => {
    const { isPlaying } = this.state;

    // Stop tracking of time when paused using clearInterval
    if (isPlaying) {

      clearInterval(this.loop);

      this.setState({
        isPlaying: false
      });

    } else {
      // Keep track of time using setInterval
      this.setState({
        isPlaying: true
      });

      this.loop = setInterval(() => {
        const { clockCount, currentTimer, sessionCount, breakCount } = this.state;

        // Update the currentTimer and clockCount whenever timer hits zero
        if (clockCount === 0) {
          this.setState({
            currentTimer: currentTimer === 'Session' ? 'Break' : 'Session',
            clockCount: currentTimer === 'Session' ? breakCount * 60 : sessionCount * 60,
          });
        } else {

          // For timer like working decrease 1 from clockCount every second
          this.setState({
            clockCount: clockCount - 1
          });
        }

      }, 1000);
    }
  }

  // To handle reset timer event
  handleReset = () => {
    this.setState({
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25 * 60,
      currentTimer: 'Session',
      isPlaying: false,
    });

    clearInterval(this.loop);

  }

  render() {

    const
      { breakCount,
        sessionCount,
        clockCount,
        currentTimer,
        isPlaying } = this.state;

    // To handle break properties
    const breakProps = {
      title: 'Break',
      count: breakCount,
      handleDecrease: () => this.handleLengthChange(-1, 'break'),
      handleIncrease: () => this.handleLengthChange(1, 'break')
    }

    // To handle session properties
    const sessionProps = {
      title: 'Session',
      count: sessionCount,
      handleDecrease: () => this.handleLengthChange(-1, 'session'),
      handleIncrease: () => this.handleLengthChange(1, 'session'),
    }

    return (
      <div className="App">
        <div className="container-pomo">
          <div className="clock-container">
            <h1>{currentTimer}</h1>
            <span>{this.convertToTime(clockCount)}</span>
            <div className="set-timer-flex-1">
              <button onClick={this.handlePlayPause} className='play-pause'> 
                <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay} 
                size='xl' />
              </button>
              <button onClick={this.handleReset} className='sync'>
                <FontAwesomeIcon 
                icon={faSync} 
                size='xl' />
              </button>
            </div>
          </div>
          <div className="set-timer-flex-2">
            <SetTimer {...breakProps} />
            <SetTimer {...sessionProps} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pomodoro;