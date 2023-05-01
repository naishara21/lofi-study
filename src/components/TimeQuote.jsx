import React from 'react'
import { useState, useEffect } from 'react';
import './styles/timer.css'

const TimeQuote = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {setInterval(() => setDateState(new Date()), 30000);}, []);
    return (
      <div className="quote">
        <div className='timer'>
        <p className='date'>
          {' '}
          {dateState.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
        <p class='time'>
        { dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
        </p>
      </div>
    </div>
    )
}

export default TimeQuote