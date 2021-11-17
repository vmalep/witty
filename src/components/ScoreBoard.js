/* import { useState } from "react"; */
import { TriviaAPI } from "../utils/TriviaAPI"

const ScoreBoard = (props) => {
    const {results} = props
    
    return (
        <>
          <h2>Overall Results</h2>
          {results.map((item, index) => (
            <div>
                <p
                  className="score"
                  style={{color: TriviaAPI.find(category => category.catNb === item.catNb).color}}
                  key={index}
                >
                  {TriviaAPI.find(category => category.catNb === item.catNb).catName}
                  <span className='smaller-font'>
                    {item.difficultyLevel === "None" ? '' : ` (${item.difficultyLevel.toLowerCase()})`}
                  </span>
                  {" "}: {item.scorePc}%
                </p>
            </div>
        ))}      
        </>
      )

}

export default ScoreBoard;