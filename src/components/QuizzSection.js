import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuizzCard from './QuizzCard'
import QuizzGenerator from '../utils/QuizzGenerator'

function QuizzSection() {
    const [quizzList, setQuizzList] = useState([])
    const [newQuizzList, setNewQuizzList] = useState([]) // for testing. Will replace quizzList later

    const [quizzCat, setQuizzCat] = useState([
        {
            catName: "History",
            catNb: "23"
        }
    ])

    const baseUrl = "https://opentdb.com/api.php"

    const [quizzURL, setQuizzURL] = useState("https://opentdb.com/api.php?amount=10&category=23&type=multiple")
    const [dataLoaded, setDataLoaded] = useState(false)
    const [questCount, setQuestCount] = useState(0) // Keep track of the index number of the current question
    const [score, setScore] = useState(0) // Keep track of the right answers

    /* const [quizzQuestNb, setQuizzQuestNb] = useState("10")
    const [quizzQuestType, setQuizzQuestType] = useState(["multiple", "boolean"])

    useEffect(() => {
        setQuizzURL(`${baseUrl}?amount=${quizzQuestNb}&category=${quizzCat[0].catNb}&type=${quizzQuestType[0]}`)
    }, [quizzQuestNb, quizzQuestType, quizzCat]) */

    useEffect(() => {
        axios.get(quizzURL)
          .then(res => res.data.results.map((question, i) => ({...question, idNum: i + 1})))
          .then(res => setQuizzList(res))
          .then(setDataLoaded(true))
          .catch(err => console.log(err))
    }, [])

    if (Object.keys(quizzList).length !== 0) QuizzGenerator('trivia', quizzList)

    const checkAnswer = (response) => { // Receive the answer and check if correct. If so, increment the score. Increment the questCount and update the current question to the new index.
        if (response === quizzList[questCount].correct_answer) {
            setScore(score + 1)
        }
        setQuestCount(questCount + 1)
    }

    return (
        <>
            {   // Checking if the data is there
                dataLoaded &&
                quizzList
                    .filter((element) => quizzList.indexOf(element) === questCount)
                    .map((element, index) => {
                        console.log(element)
                        return (
                            <QuizzCard key={index} questCount={questCount} quizzQuestion={element} checkAnswer={checkAnswer} score={score} />
                        )
                    })
            }
        </>
    )
}

export default QuizzSection;