import { useState } from "react";


const ScoreBoard = (props) => {
    const {results} = props
       
    return (
        <>
          <h2>Overall Results</h2>
          {results.map((item, index) => (
            <div>
                <p key={index}>{item.catNb} : {item.scorePc}%</p>
            </div>
        ))}      
        </>
      )

}

export default ScoreBoard;