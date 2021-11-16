import { useState, useEffect, useCallBack } from 'react'
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
        setResults,
        results
    } = props

    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [gifSource, setGifSource] = useState(GetRandomGif("waiting"))
    const [countDownFinished, setCountDownFinished] = useState(false)

/*     const checkAnswer = useCallBack(
        (response) => { // Receive the answer and check if correct. If so, increment the score. Increment the questCount and update the current question to the new index.
        setSelectedAnswer(response);
        if (response === quizList[questCount].correct_answer) {
            setScore(score + 1)
            setGifSource(GetRandomGif("right"))
        } else setGifSource(GetRandomGif("wrong"))

        setNextBtnDisabled(false)
    }, [quizList, questCount, score, setScore]) */

    const checkAnswer = (response) => { // Receive the answer and check if correct. If so, increment the score. Increment the questCount and update the current question to the new index.
        setSelectedAnswer(response);
        if (response === quizList[questCount].correct_answer) {
            setScore(score + 1)
            setGifSource(GetRandomGif("right"))
        } else setGifSource(GetRandomGif("wrong"))

        setNextBtnDisabled(false)
    }

    const handleNext = () => {
        // If we have reached the last question...
        if (quizList[questCount].questNum >= quizList.length) {
            const newResults = [...results]
            // we save the selected category and we calculate the result in % and
            newResults.push({catNb:selectedCategory, scorePc:Math.round((score / (quizList.length) * 100))})
            setResults(newResults)
            // then we move to the next step: Score section
            setAppStep(3)
        } else {
            setQuestCount(questCount + 1) // Otherwise, we move to the next question     
        }
    }

    useEffect(() => {
        countDownFinished && checkAnswer("no answer")
    }, [countDownFinished])

    const handleSelect = (element) => {
        if (selectedAnswer === element && selectedAnswer !== quizQuestion.correct_answer) return "wrong-answer-btn"
        else if (element === quizQuestion.correct_answer) return "right-answer-btn"
        else return null
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
                <p>Difficulty: {quizQuestion.difficulty}</p>
                <p>Score: {score}</p>
            </div>
            <p>question {quizQuestion.questNum}: {quizQuestion.question}</p>
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