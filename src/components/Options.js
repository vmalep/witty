import {useState} from "react";
import Difficulty from "./Difficulty";
import Category from "./Category";

const Options = (props) => {
   const {userName, selectedAvatar, setAppStep, selectedCategory, setSelectedCategory, selectedDifficulty, setSelectedDifficulty} = props
   const [nextBtnDisabled, setNextBtnDisabled] = useState([true, 'grey']);

   const handleClick = () => {
       if(!selectedDifficulty || !selectedCategory) {
           setNextBtnDisabled(true, "grey")
       }
       setNextBtnDisabled(false)
       setAppStep(2)
   }
   
    return (
           <>
               <div className="current-player">
                   <p className="current-player-name">{userName}</p>
                   <img className="current-player-avatar" src={selectedAvatar.src} alt={selectedAvatar.alt} />
               </div>
               <Difficulty 
                selectedDifficulty={selectedDifficulty}
                setSelectedDifficulty={setSelectedDifficulty}
               />
               <Category
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory} 
                setNextBtnDisabled={setNextBtnDisabled}
                />
               <button className="button"
                   onClick={handleClick}
                   disabled={nextBtnDisabled[0]}
                   style={{backgroundColor: nextBtnDisabled[1]}}
                   >NEXT</button>
          </>
       )
   }

   export default Options;
