 import {useState} from "react";
 import { TriviaAPI } from "../utils/TriviaAPI";
 
 const Category = (props) => {
    const {userName, selectedAvatar, setAppStep, selectedCategory, setSelectedCategory} = props
    const level = ["Easy","Medium","Hard"]



    const handleClick = () => {
        setAppStep(2)
    }

    const handleCategory = (element) => {
        setSelectedCategory(element.catNb);
        setAppStep(2)
    }
    

     return (
            <>
                <div className="current-player">
                    <p className="current-player-name">{userName}</p>
                    <img className="current-player-avatar" src={selectedAvatar.src} alt={selectedAvatar.alt} />
                </div>
                
                <h2>Select your Difficulty</h2>
                <div className = "level">
                    {level.map((element,index) => {
                        return(
                            <button key={index}>{element}</button>
                        )
                    })}
                </div>
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
                    onClick={handleClick}>NEXT</button>
           </>
        )
    }

    export default Category;

 /*onClick={() => props.checkAnswer(element)}*/