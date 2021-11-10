import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const CountDownTimer = (props) => {
  const { setCountDownFinished } = props

  return (
    <CountdownCircleTimer
      isPlaying
      duration={10}
      colors={[
        ['#004777', 0.33],
        ['#F7B801', 0.33],
        ['#A30000', 0.33],
      ]}
      onComplete={() => setCountDownFinished(true)}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  )
}

export default CountDownTimer