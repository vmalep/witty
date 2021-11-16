const Difficulty = (props) => {
    const {selectedDifficulty, setSelectedDifficulty} = props;
    
    const levels = ["Easy","Medium","Hard"]

    /**
     * If the selected difficulty is the one given as parameter, remove it
     * otherwise, update the selectedDifficulty with it
     * @param {string} element 
     */
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
                           className={selectedDifficulty === element ? "selected-btn" : "unselected-btn"}
                           >{element}</button>
                       )
                   })}
               </div>
          </>
       )
   }

   export default Difficulty;