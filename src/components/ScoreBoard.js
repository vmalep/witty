/* import { useState } from "react"; */
import { TriviaAPI } from "../utils/TriviaAPI"

const ScoreBoard = (props) => {
  const { results } = props

  return (
    <>
      <h2>Overall Results :</h2>
      <ul style={{ listStyleType: "none" }}>
        {results.map((item, index) => (
          <li
            className="score"
            style={{ color: TriviaAPI.find(category => category.catNb === item.catNb).color }}
            key={index}
          >
            {TriviaAPI.find(category => category.catNb === item.catNb).catName}
            <span className='smaller-font'>
              {item.difficultyLevel === "None" ? '' : ` (${item.difficultyLevel.toLowerCase()})`}
            </span>
            {" "}: {item.scorePc}%
          </li>
        ))}
      </ul>
    </>
  )
}

export default ScoreBoard;