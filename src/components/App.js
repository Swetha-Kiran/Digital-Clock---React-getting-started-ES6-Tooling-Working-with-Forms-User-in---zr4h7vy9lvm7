import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [date, setDate] = useState(new Date("12/17/2021, 6:24:00 PM"));
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div id="main">
      <div className="date-time">
      {date.toLocaleTimeString()}
      </div>
    </div>
  )
}


export default App;
  

