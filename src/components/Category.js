 import {useState} from "react";
 import axios from "axios";
 
 const Category = (props) => {
    const [ quizCategory , setQuizCategory] = useState ([]);
    const {userName, selectedAvatar, appStep, setAppStep} = props
    //const categories = ["History", "Sport","Art","Music"]
    const level = ["Easy","Medium","Hard"]

/*
    const categories = [
        {
            catName: "History",
            catNb: "23",
            color: "green"
        },
        {  
            catName: "Sport",
            catNb: "21",
            color: "blue"
        },
        {
            name:"Art",
            catNb: "25",
            color:"yellow"
        },
        {
            name:"Music",
            catNb:"12",
            color:"pink"
        }
     ]
     */
    
     const getQuizCategory = () => {
        axios
        .get('https://opentdb.com/api.php?amount=10&category')
        .then((response) => response.data)
        .then((data) => {
          setQuizCategory(data.results[0]);
        });
    };

    const handleClick = () => {
        setAppStep(appStep + 1)
    }
/*
    const handleCategoryClick = (element) => {
        setQuizCategory(element);
    }
    */

     return (
            <>
                <div className="current-player">
                    <img className="current-player-avatar" src={selectedAvatar.src} alt={selectedAvatar.alt} />
                    <p className="current-player-name">{userName}</p>
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
                    {quizCategory.map((element , index) => {
                        return(
                            <button
                                    key={index}
                                    onClick={setQuizCategory(element)} 
                            >{element}</button>       
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