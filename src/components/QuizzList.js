import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuizzCard from './QuizzCard'

function QuizzSection() {
    const [quizzList, setQuizzList] = useState([])

    const [quizzCat, setQuizzCat] = useState([
        {
            catName: "History",
            catNb: "23",
        }
    ])

    const [quizzURL, setQuizzURL] = useState("https://opentdb.com/api.php?amount=10&category=23&type=multiple")
    const [quizzQuestNb, setQuizzQuestNb] = useState("10")
    const [quizzQuestType, setQuizzQuestType] = useState(["multiple", "boolean"])

    setQuizzURL(`${quizzURL}?amount=${quizzQuestNb}&category=${quizzCat[0].catNb}&type=${quizzQuestType[0]}`)

    useEffect(() => {
        axios.get({quizzURL})
            .then(res => {
                console.log(res)
                setQuizzList(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    quizzList.map((element, index) => {    
        return (
            <>
                <QuizzCard quizzQuestion={element} />
            </>
        )
    })
}

export default QuizzSection;