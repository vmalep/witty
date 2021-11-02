 import {useState} from "react";
 import { TriviaAPI } from "../utils/TriviaAPI";
 import Difficulty from "./Difficulty";
 
 const Category = (props) => {
    const {userName, selectedAvatar, setAppStep, selectedCategory, setSelectedCategory, difficultyLevel} = props
    const [nextBtnDisabled, setNextBtnDisabled] = useState([true, 'grey']);

    const handleClick = () => {
        if(!difficultyLevel || !selectedCategory) {
            setNextBtnDisabled(true, "grey")
        }
        setNextBtnDisabled(false)
        setAppStep(2)
    }

    const handleCategory = (element) => {
        setSelectedCategory(element.catNb);
        setNextBtnDisabled(false)
    }
    

     return (
            <>
                <div className="current-player">
                    <p className="current-player-name">{userName}</p>
                    <img className="current-player-avatar" src={selectedAvatar.src} alt={selectedAvatar.alt} />
                </div>
                <Difficulty />
                <h2>Select your Category</h2>
                <div className="usernamebox">
                    {TriviaAPI.map((element , index) => {
                        return(
                            <button
                                    key={index}
                                    onClick={() => handleCategory(element)} 
                                    style={{backgroundColor: element.color}}      
                            >{element.catName}</button>   
                        )
                    })}
                          
                </div>
                <button className="button"
                    onClick={handleClick}
                    disabled={nextBtnDisabled[0]}
                    style={{backgroundColor: nextBtnDisabled[1]}}
                    >NEXT</button>
           </>
        )
    }

    export default Category;

 /*onClick={() => props.checkAnswer(element)}*/