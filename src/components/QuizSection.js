import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuizCard from './QuizCard'
import QuizGenerator from '../utils/QuizGenerator'

function QuizSection() {
    const [quizList, setQuizList] = useState([])
    const [newQuizList, setNewQuizList] = useState([]) // for testing. Will replace quizList later

    const [quizCat, setQuizCat] = useState([
        {
            catName: "History",
            catNb: "23"
        }
    ])

    const baseUrl = "https://opentdb.com/api.php"

    const [quizURL, setQuizURL] = useState("https://opentdb.com/api.php?amount=10&category=23&type=multiple")
    const [dataLoaded, setDataLoaded] = useState(false)
    const [questCount, setQuestCount] = useState(0) // Keep track of the index number of the current question
    const [score, setScore] = useState(0) // Keep track of the right answers

    /* const [quizQuestNb, setQuizQuestNb] = useState("10")
    const [quizQuestType, setQuizQuestType] = useState(["multiple", "boolean"])

    useEffect(() => {
        setQuizURL(`${baseUrl}?amount=${quizQuestNb}&category=${quizCat[0].catNb}&type=${quizQuestType[0]}`)
    }, [quizQuestNb, quizQuestType, quizCat]) */

    useEffect(() => {
        axios.get(quizURL)
          .then(res => res.data.results.map((question, i) => ({...question, idNum: i + 1})))
          .then(res => setQuizList(res))
          .then(setDataLoaded(true))
          .catch(err => console.log(err))
    }, [])

    if (Object.keys(quizList).length !== 0) setNewQuizList(QuizGenerator('trivia', quizList))

    console.log("newQuizList: ", newQuizList)

    const checkAnswer = (response) => { // Receive the answer and check if correct. If so, increment the score. Increment the questCount and update the current question to the new index.
        if (response === quizList[questCount].correct_answer) {
            setScore(score + 1)
        }
        setQuestCount(questCount + 1)
    }

    return (
        <>
            {   // Checking if the data is there
                dataLoaded &&
                quizList
                    .filter((element) => quizList.indexOf(element) === questCount)
                    .map((element, index) => {
                        console.log(element)
                        return (
                            <QuizCard key={index} questCount={questCount} quizQuestion={element} checkAnswer={checkAnswer} score={score} />
                        )
                    })
            }
        </>
    )
}

export default QuizSection;