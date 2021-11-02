 import {useState} from "react";
 import { TriviaAPI } from "../utils/TriviaAPI";
 
 const Category = (props) => {
    const {setSelectedCategory, setNextBtnDisabled} = props

    const handleCategory = (element) => {
        setSelectedCategory(element.catNb);
        setNextBtnDisabled(false)
    }
    
     return (
            <>
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
           </>
        )
    }

    export default Category;