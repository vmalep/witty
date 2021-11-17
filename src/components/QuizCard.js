import { useState, useEffect, useCallback } from 'react'
import GetRandomGif from '../utils/GetRandomGif'
import CountDownTimer from './CountDownTimer'

const QuizCard = (props) => {
    const {
        quizQuestion,
        questCount,
        quizList,
        score,
        setScore,
        setQuestCount,
        setAppStep,
        countDown,
        selectedCategory,
        selectedDifficulty,
        setResults,
        results
    } = props

    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [gifSource, setGifSource] = useState(GetRandomGif("waiting"))
    const [countDownFinished, setCountDownFinished] = useState(false)

        /**
     * Receive the selected answer value and check it with the correct one
     * If correct, increment the score value by 1 and select a 'right' gif
     * Otherwise select a 'wrong' gif
     * Then activate the Next button
     * @param {string} response 
     */
        const checkAnswer = useCallback( // Breaks the code
            (response) => { // Receive the answer and check if correct. If so, increment the score. Increment the questCount and update the current question to the new index.
            setSelectedAnswer(response);
            if (response === quizList[questCount].correct_answer) {
                setScore(score + 1)
                setGifSource(GetRandomGif("right"))
            } else setGifSource(GetRandomGif("wrong"))
    
            setNextBtnDisabled(false)
        }, [quizList, questCount, score, setScore])

    /**
     * Check if we have reached the last question and if so
     * add the selected category and the score in % into the results state
     * otherwise move to the next question
     */
    const handleNext = () => {
        // If we have reached the last question...
        if (quizList[questCount].questNum >= quizList.length) {
            const newResults = [...results]
            // we save the selected category and we calculate the result in % and
            newResults.unshift({    // unshift rather than push, so the last results appear first
                catNb: selectedCategory,
                difficultyLevel: selectedDifficulty,
                countDown: countDown,
                scorePc: Math.round((score / (quizList.length) * 100))
            })
            setResults(newResults)
            // then we move to the next step: Score section
            setAppStep(3)
        } else {
            setQuestCount(questCount + 1) // Otherwise, we move to the next question     
        }
    }

    useEffect(() => {
        countDownFinished && checkAnswer("no answer")
    }, [countDownFinished, checkAnswer]) // Warning for missing dependency, but useCallBack breaks the code and
    // moving the checkAnswer function in a separate file only multiply this warning for each set'State' used in that function...

    /**
     * Manage the green and red color for the right and wrong answer buttons
     * @param {string} element 
     * @returns {string}
     */
    const handleSelect = (element) => {
        if (selectedAnswer === element && selectedAnswer !== quizQuestion.correct_answer) return "wrong-answer-btn"
        else if (element === quizQuestion.correct_answer) return "right-answer-btn"
        else return null // for the wrong answers that were not selected
    }

    return (
        <div className="quiz-card">
            <div className="quiz-animation">
                {(countDown && !selectedAnswer) &&
                    <CountDownTimer setCountDownFinished={setCountDownFinished} />
                }
                {(!countDown || selectedAnswer) &&
                    <img src={gifSource.src} resizemode="cover" height="200px" alt="Loading..." />
                }
            </div>
            <div className="flex-spacebetween">
                <p><span className="settings-color">Difficulty: </span>{quizQuestion.difficulty}</p>
                <p><span className="settings-color">Score: </span>{score}</p>
            </div>
            <p className="questions"><span className="settings-color">question {quizQuestion.questNum}: </span>{quizQuestion.question}</p>
            <div className="flex-wrap">
                {quizQuestion.possible_answers.map((element, index) => {
                    return (
                        <button
                            key={index}
                            disabled={!nextBtnDisabled}
                            className={`answers-btn ${selectedAnswer && handleSelect(element)}`}
                            onClick={() => checkAnswer(element)}
                        >
                            {element}
                        </button>
                    )
                })}
            </div>
            <div className="flex-wrap">
                <button
                    onClick={handleNext}
                    disabled={nextBtnDisabled}
                    className={nextBtnDisabled ? 'disabled-btn' : 'action-btn'}
                >
                    Next
                </button>

                <button className="exit-btn"
                    onClick={() => setAppStep(1)}
                >
                    Exit
                </button>
            </div>
        </div >
    )
}

export default QuizCard;