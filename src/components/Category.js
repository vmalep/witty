 import {useState} from "react";
 import { TriviaAPI } from "../utils/TriviaAPI";
 const colorConvert = require('color-convert');
 
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

                        const primaryH = colorConvert.keyword.hsl(element.color)[0]

                        return(
                            <button
                                    key={index}
                                    onClick={() => handleCategory(element)} 
                                    style={{backgroundColor: selectedCategory !== element.catNb 
                                        ? `hsl(${primaryH}, 80%, 62%)` 
                                        : `hsl(${primaryH}, 72%, 50%)` 
                                        }} 
                            >{element.catName}</button>   
                        )
                    })}         
                </div>
           </>
        )
    }

    export default Category;

