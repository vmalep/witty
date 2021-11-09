import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuizCard from './QuizCard'
import QuizGenerator from '../utils/QuizGenerator'

function QuizSection(props) {
    const {setAppStep, selectedCategory, selectedDifficulty, setScorePc} = props

    // To be improved with a single userSession Object or context feature
    const [apiData, setApiData] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)
    const [quizList, setQuizList] = useState([])
    const [questCount, setQuestCount] = useState(0)
    const [score, setScore] = useState(0)

    // To be adapted once those options will be available in the previous step
    const catParam = selectedCategory ? `&category=${selectedCategory}` : ''
    const amountParam = '?amount=10'
    const typeParam = '&type=multiple' //questType ? `&type=${questType}`: ''
    const difficultyParam = selectedDifficulty !== "None" ? `&difficulty=${selectedDifficulty.toLowerCase()}` : '' 

    // 2BDone: The axios part should be moved to the QuizGenerator function, but not working for the moment. To be done next week.
    const baseUrl = "https://opentdb.com/api.php"

    const quizURL = `${baseUrl}${amountParam}${catParam}${difficultyParam}${typeParam}`
    /* console.log("quizURL: " + quizURL) */

    useEffect(() => {
        axios.get(quizURL)
          .then(res => setApiData(res.data.results))
          .then(setDataLoaded(true))
          .catch(err => console.log(err))
        }, [quizURL])
        
    useEffect(() => {
        if (Object.keys(apiData).length !== 0){
            setQuizList(QuizGenerator('trivia', apiData))
        }
    }, [apiData])

    console.log("quizList: ", quizList)

    return (
        <>
            {   // Checking if the data is there
                dataLoaded &&
                quizList
                    .filter((element) => quizList.indexOf(element) === questCount)
                    .map((element, index) => {
                        /* console.log(element) */
                        return (
                            <QuizCard
                                key={element.questNum}
                                questCount={questCount} 
                                quizList={quizList} 
                                quizQuestion={element} 
                                score={score} 
                                setScore={setScore}
                                setQuestCount={setQuestCount}
                                setScorePc={setScorePc}
                                setAppStep={setAppStep} />
                        )
                    })
            }
        </>
    )
}

export default QuizSection;