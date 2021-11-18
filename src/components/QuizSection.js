import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuizCard from './QuizCard'
import QuizApiUrl from '../utils/QuizApiUrl'
import QuizGenerator from '../utils/QuizGenerator'

function QuizSection(props) {
    const {
        setAppStep,
        selectedCategory,
        selectedDifficulty,
        countDown,
        setResults,
        results
    } = props

    const [apiData, setApiData] = useState([]) // Get the fetched API
    const [dataLoaded, setDataLoaded] = useState(false) // Boolean to check if API is loaded
    const [quizList, setQuizList] = useState([]) // List of question in a defined format
    const [questCount, setQuestCount] = useState(0) // Keep track of the current question
    const [score, setScore] = useState(0) // Sum the correct responses

    /**
     * Build the API url for the next axios request
     */
    const quizURL = QuizApiUrl('trivia', selectedCategory, selectedDifficulty) //`${baseUrl}${amountParam}${catParam}${difficultyParam}${typeParam}`

    /**
     * Fetch the data from the API (unable to run it in a separate function)
     */
    useEffect(() => {
        axios.get(quizURL)
          .then(res => setApiData(res.data.results))
          /* .then(setDataLoaded(true)) */
          .catch(err => console.log(err))
        }, [quizURL])
    
    /**
     * If apiData is not empty, generate the list of question out of it
     */
    useEffect(() => {
        if (Object.keys(apiData).length !== 0){
            setQuizList(QuizGenerator('trivia', apiData))
        }
    }, [apiData])

    return (
        <>
            {   // Checking if the data is there
                dataLoaded ?
                quizList
                    .filter((element) => quizList.indexOf(element) === questCount)
                    .map((element, index) => {

                        return (
                            <QuizCard
                                key={element.questNum}
                                questCount={questCount} 
                                quizList={quizList} 
                                quizQuestion={element} 
                                score={score} 
                                setScore={setScore}
                                setQuestCount={setQuestCount}
                                setAppStep={setAppStep}
                                countDown={countDown}
                                selectedCategory={selectedCategory}
                                selectedDifficulty={selectedDifficulty}
                                setResults={setResults}
                                results={results} />
                        )
                    })
                : <img
                    src="https://c.tenor.com/QWkK5z1NnbwAAAAC/no-brain-loading.gif"
                    resizemode="cover"
                    height="200px"
                    alt="Loading..."
                />
            }
        </>
    )
}

export default QuizSection;