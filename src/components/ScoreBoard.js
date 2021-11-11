/* import { useState } from "react"; */
import { TriviaAPI } from "../utils/TriviaAPI"

const ScoreBoard = (props) => {
    const {results} = props
    
    console.log(results)
    return (
        <>
          <h2>Overall Results</h2>
          {results.map((item, index) => (
            <div>
                <p className="score" style={{color: TriviaAPI.find(category => category.catNb === item.catNb).color}}  key={index}>{TriviaAPI.find(category => category.catNb === item.catNb).catName} : {item.scorePc}%</p>
            </div>
        ))}      
        </>
      )

}

export default ScoreBoard;