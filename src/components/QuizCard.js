import { useState } from 'react'
import GetRandomGif from '../utils/GetRandomGif'

const QuizCard = (props) => {
    const {
        quizQuestion,
        questCount,
        quizList,
        score,
        setScore,
        setQuestCount,
        setScorePc,
        setAppStep
    } = props

    const [nextBtnDisabled, setNextBtnDisabled] = useState([true, 'grey'])
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [gifSource, setGifSource] = useState(GetRandomGif("waiting"))

    const checkAnswer = (response) => { // Receive the answer and check if correct. If so, increment the score. Increment the questCount and update the current question to the new index.
        setSelectedAnswer(response);
        if (response === quizList[questCount].correct_answer) {
            setScore(score + 1)
            setGifSource(GetRandomGif("right"))
        } else setGifSource(GetRandomGif("wrong"))

        setNextBtnDisabled([false])
    }

    const handleNext = () => {
        // If we have reached the last question, we move to the next step: Score section
        if (quizList[questCount].questNum >= quizList.length) {
            setScorePc(Math.round((score / (quizList.length + 1) * 100), 2))
            setAppStep(3)
        } else {
            setQuestCount(questCount + 1) // Otherwise, we move to the next question     
        }
    }

    const handleSelect = (element) => {
        if (selectedAnswer === element && selectedAnswer === quizQuestion.correct_answer) {
            return "right-answer-btn";
        } else if (selectedAnswer === element && selectedAnswer !== quizQuestion.correct_answer) {
            return "wrong-answer-btn"
        } else if (element === quizQuestion.correct_answer) {
            return "right-answer-btn"
        }
    }

    return (
        <div className="quiz-card">
            <img src={gifSource.src} resizemode="cover" height="200px" alt="Loading..." />
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
                            /*className={
                                (!nextBtnDisabled[0] && (quizQuestion.correct_answer === element))
                                ? "right-answer-btn"
                                : null
                                }*/
                            className={`answers ${selectedAnswer && handleSelect(element)}`}
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
                    disabled={nextBtnDisabled[0]}
                    style={{ backgroundColor: nextBtnDisabled[1] }}
                >
                    Next question
                </button>

                <button className="button-exit"
                    onClick={() => setAppStep(1)}
                >
                    Exit
                </button>
            </div>
        </div >
    )
}


export default QuizCard;