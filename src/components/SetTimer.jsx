import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './styles/pomodoro.css';

const SetTimer = (props) => {
    return (
        <div className="timer-container">
            <h3>{props.title}</h3>
            <div className="set-timer-flex actions-wrapper">
                <button onClick={props.handleDecrease}><FontAwesomeIcon icon={faMinus} size='xl'className='minus-btn'/></button>
                <span className='count'>{props.count}</span>
                <button onClick={props.handleIncrease}><FontAwesomeIcon icon={faPlus} size='xl' className='plus-btn'/></button>
            </div>
        </div>
    )
}

export default SetTimer;