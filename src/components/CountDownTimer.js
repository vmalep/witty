import { useState, useEffect } from 'react'
import Timer from './Timer';

const CountDownTimer = (props) => {
  const { setCountDownFinished } = props

  const [counter, setCounter] = useState(10);
  
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    !counter && setCountDownFinished(true)
  }, [counter])

  return (
    <div className="timer">
      <Timer />
    </div>
  )
}

export default CountDownTimer