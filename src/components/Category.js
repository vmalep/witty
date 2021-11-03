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

                        console.log("element.color" + colorConvert.keyword.hsl(element.color))
                        const fadedColor=[
                            colorConvert.keyword.hsl(element.color)[0],
                            colorConvert.keyword.hsl(element.color)[1],
                            "50%"
                        ]
                        console.log("fadedColor" + fadedColor)

                        return(
                            <button
                                    key={index}
                                    onClick={() => handleCategory(element)} 
                                    style={{backgroundColor: selectedCategory !== element.catNb 
                                        ? element.color 
                                        : `hsl(${fadedColor})`
                                        }} 
                            >{element.catName}</button>   
                        )
                    })}         
                </div>
           </>
        )
    }

    export default Category;

