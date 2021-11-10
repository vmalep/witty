import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

const CountDownTimer = () => {
    // Random component
    const Completionist = () => <span>Too late!</span>;
    
    ReactDOM.render(
      (
        <Countdown date={Date.now() + 5000}>
          <Completionist />
        </Countdown>
      ),
      document.getElementById('root')
    );
}

export default CountDownTimer