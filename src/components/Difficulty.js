import {useState} from "react";

const Difficulty = (props) => {
    const {setSelectedDifficulty} = props;
    
    const levels = ["Easy","Medium","Hard"]
    return (
           <>
               <h2>Select your Difficulty</h2>
               <div className = "level">
                   {levels.map((element,index) => {
                       return(
                           <button 
                           key={index}
                           onClick={() => setSelectedDifficulty(element)}
                           >{element}</button>
                       )
                   })}
               </div>
          </>
       )
   }

   export default Difficulty;