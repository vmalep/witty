const Difficulty = (props) => {
    const {selectedDifficulty, setSelectedDifficulty} = props;
    
    const levels = ["Easy","Medium","Hard"]

    const handleDifficulty = (element) => {
        selectedDifficulty === element
        ? setSelectedDifficulty("None")
        : setSelectedDifficulty(element)
    }

    return (
           <>
               <h2>Difficulty level (optional)</h2>
               <div className = "level">
                   {levels.map((element,index) => {
                       return(
                           <button 
                           key={index}
                           onClick={() => handleDifficulty(element)}
                           className={selectedDifficulty === element ? "difficulty-on" : "difficulty-off"}
                           >{element}</button>
                       )
                   })}
               </div>
          </>
       )
   }

   export default Difficulty;