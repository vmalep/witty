import Trophy from "../utils/Trophy"
import { useEffect, useState } from "react";


const ScoreSection = (props) => {
  const { setAppStep, userName, scorePc } = props
  const [resultTrophy, setResultTrophy] = useState("");

  useEffect(() => {
    if (scorePc > 0 && scorePc <= 25) {
      setResultTrophy(Trophy[3].src)
    } else if (scorePc > 25 && scorePc <= 50) {
      setResultTrophy(Trophy[2].src)
    } else if (scorePc > 50 && scorePc <= 75) {
      setResultTrophy(Trophy[1].src)
    } else if (scorePc > 75) {
        setResultTrophy(Trophy[0].src)
    }
  }, [scorePc])
  
  


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
    setAppStep(1)
  }
  return (
    <>
      <img src={resultTrophy} alt="your trophy" resizemode="cover" height="200px"/> 
      <h2>Hi {userName}!</h2>
      <h2>Your score is {scorePc}%</h2>
      <button onClick={handleClick}>Start again!</button>
    </>
  )
}

export default ScoreSection