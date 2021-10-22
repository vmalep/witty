import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuizzCard from './QuizzCard'

function QuizzSection() {
    const [quizzList, setQuizzList] = useState([])

    const [quizzCat, setQuizzCat] = useState([
        {
            catName: "History",
            catNb: "23"
        }
    ])

    const baseUrl = "https://opentdb.com/api.php"

    const [quizzURL, setQuizzURL] = useState("https://opentdb.com/api.php?amount=10&category=23&type=multiple")
    const [dataLoaded, setDataLoaded] = useState(false)
    /* const [quizzQuestNb, setQuizzQuestNb] = useState("10")
    const [quizzQuestType, setQuizzQuestType] = useState(["multiple", "boolean"])

    useEffect(() => {
        setQuizzURL(`${baseUrl}?amount=${quizzQuestNb}&category=${quizzCat[0].catNb}&type=${quizzQuestType[0]}`)
    }, [quizzQuestNb, quizzQuestType, quizzCat]) */
    
    useEffect(() => {
        axios.get(quizzURL)
            .then(res => {
                console.log("res = " + res.results)
                setQuizzList(res.results)
            })
            .then(
                setDataLoaded(true)
            )
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>  
            <h2>QuizzSection</h2>
            {   // Checking if the data is there
          
                dataLoaded &&
                quizzList.map((element, index) => {  
                    console.log("element = "+ element)
                    return (
                        <div key={index}>
                            <QuizzCard quizzQuestion={element} />
                        </div>
                    )
                })
                
            }
        </>
    )
}

export default QuizzSection;