import React, { useState, useEffect } from 'react';

const Example7 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{time.toISOString()}</div>;
};

export default Example7;