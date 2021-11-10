import * as React from "react";
import { render } from "react-dom";

const CountDownTimer = (props) => {
  const { CountDownTime } = props

  const [counter, setCounter] = React.useState(CountDownTime);
  
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className='count-down'>Countdown: {counter}</div>
  );
}

export default CountDownTimer