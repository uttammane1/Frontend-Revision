import React, { useState, useEffect } from 'react';

function Time() {
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <div>
      <h1>Countdown: {time}</h1>
    </div>
  );
}

export default Time;
