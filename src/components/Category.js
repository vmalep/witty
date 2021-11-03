 import {useState} from "react";
 import { TriviaAPI } from "../utils/TriviaAPI";
 
 const Category = (props) => {
    const {selectedCategory, setSelectedCategory, setNextBtnDisabled} = props

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
                                    style={{backgroundColor: selectedCategory !== element.catNb ? element.color : 'purple'}} 
                            >{element.catName}</button>   
                        )
                    })}         
                </div>
           </>
        )
    }

    export default Category;

