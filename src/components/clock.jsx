import { useState, useEffect } from 'react';

const Clock = () => {
  const  [time, setTime] = useState(new Date());
  const [backgroundColor, setBackgroundColor] = useState('red');
  const [previousColor, setPreviousColor] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
      let randomColor = '';
      do {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
      } while (randomColor === previousColor);
      setBackgroundColor(randomColor);
      setPreviousColor(randomColor);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [previousColor]);

  return <div style={{ backgroundColor }}>
      <div className='box'>
      <div>
      {
      time.toLocaleTimeString()
      }
      </div>
      <div>
      {
      time.toLocaleString("en-US",{ weekday: "long"})
      }
      </div>
      <div>
      {
      time.toLocaleString("en-US",{ day : "numeric"})+"-"+
      time.toLocaleString("en-US",{ month: "long"})+"-"+
      time.toLocaleString("en-US",{ year: "numeric"})
      }
      </div>
      </div>
    </div>
};

export default Clock;
