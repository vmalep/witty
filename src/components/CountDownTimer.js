import * as React from "react";
import { render } from "react-dom";

const CountDownTimer = (props) => {
  const { CountDownTime } = props

  const [counter, setCounter] = React.useState(CountDownTime);
  
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
}

/* const rootElement = document.getElementById("root");
render(<App />, rootElement); */

export default CountDownTimer