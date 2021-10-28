import { useState } from 'react'

const ScoreSection = (props) => {
  const { setAppStep, userName, scorePc } = props

  /* const [feedbackMsg, setFeedbackMsg] = useState("") */

  /*     switch(score) {
          case (x <:
            // code block
            break;
          case y:
            // code block
            break;
          default:
            // code block
        } */
  const handleClick = () => {
    setAppStep(0)
  }
  return (
    <>
      <h2>Hi {userName}!</h2>
      <h2>Your score is {scorePc}%</h2>
      <button onClick={handleClick}>Start again!</button>
    </>
  )
}

export default ScoreSection