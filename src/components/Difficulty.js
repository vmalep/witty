import {useState} from "react";

const Difficulty = () => {
    const [difficultyLevel, setDifficultyLevel] = useState(["Easy","Medium","Hard"]);
    
    return (
           <>
               <h2>Select your Difficulty</h2>
               <div className = "level">
                   {difficultyLevel.map((element,index) => {
                       return(
                           <button 
                           key={index}
                           onClick={() => setDifficultyLevel([element])}
                           >{element}</button>
                       )
                   })}
               </div>
          </>
       )
   }

   export default Difficulty;