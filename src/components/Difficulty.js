const Difficulty = (props) => {
    const {selectedDifficulty, setSelectedDifficulty} = props;
    
    const levels = ["Easy","Medium","Hard"]
    return (
           <>
               {/* <h2>Select your Difficulty</h2> */}
               <div className = "level">
                   {levels.map((element,index) => {
                       return(
                           <button 
                           key={index}
                           onClick={() => setSelectedDifficulty(element)}
                           className={selectedDifficulty === element ? "difficulty-on" : "difficulty-off"}
                           >{element}</button>
                       )
                   })}
               </div>
          </>
       )
   }

   export default Difficulty;