import Trophy from "../utils/Trophy"
import { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";


const ScoreSection = (props) => {
  const { setAppStep, userName, scorePc, results } = props
  const [resultTrophy, setResultTrophy] = useState("");

  useEffect(() => {
    if (scorePc <= 25) setResultTrophy(Trophy[3].src)
    else if (scorePc <= 50) setResultTrophy(Trophy[2].src)
    else if (scorePc <= 75) setResultTrophy(Trophy[1].src)
    else setResultTrophy(Trophy[0].src)
    
  }, [scorePc])

  const handleClick = () => {
    setAppStep(1)
  }

  console.log(results)
  return (
    <>
      <img src={resultTrophy} alt="your trophy" resizemode="cover" height="200px" />
      <h2>Hi {userName}!</h2>
      <h2>Your last score is {scorePc}%</h2>
      <button onClick={handleClick}>Start again!</button>
      <ScoreBoard results={results}/>
    </>
  )
}

export default ScoreSection