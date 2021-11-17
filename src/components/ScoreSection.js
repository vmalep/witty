import GetTrophy from "../utils/GetTrophy"
import ScoreBoard from "./ScoreBoard";


const ScoreSection = (props) => {
  const { setAppStep, userName, results } = props

  const scorePc = results[0].scorePc

  const handleClick = () => {
    setAppStep(1)
  }

  return (
    <>
      <img src={GetTrophy(scorePc)} alt="your trophy" resizemode="cover" height="200px" />
      <h2>Hi {userName}!</h2>
      <h2>Your last score is {scorePc}%</h2>
      <button onClick={handleClick}>Start again!</button>
      <ScoreBoard results={results}/>
    </>
  )
}

export default ScoreSection