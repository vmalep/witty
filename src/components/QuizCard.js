import { useState } from 'react'
import Category from './Category'
 
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
     
    const checkAnswer = (response) => { // Receive the answer and check if correct. If so, increment the score. Increment the questCount and update the current question to the new index.
        /* console.log(nextBtnDisabled) */
        if (response === quizList[questCount].correct_answer) {
            setScore(score + 1)
        }
        /* console.log("reponse", response) */
        setNextBtnDisabled([false])
    }
    
    const handleNext = () => {
        // If we have reached the last question, we move to the next step: Score section
        if(quizList[questCount].questNum >= quizList.length){
            setScorePc(Math.round((score / (quizList.length + 1) * 100), 2))
            setAppStep(3)
        } else {
            setQuestCount(questCount + 1) // Otherwise, we move to the next question     
        }
    }

    /* Exit BUTTON*/


    const handleExit = () => {
        setAppStep(1)
    }
    
    return (
        <div className="quiz-card">
            <p>score: {score}</p>
            <p>question {quizQuestion.questNum}: {quizQuestion.question}</p>
            <div>
                {quizQuestion.possible_answers.map((element, index) => {
                    /* console.log(quizQuestion.correct_answer + "-" + element) */
                    return (
                        <button
                            key={index}
                            className={
                                (!nextBtnDisabled[0] && (quizQuestion.correct_answer === element))
                                ? "right-answer-btn" 
                                : null
                            }
                            onClick={() => checkAnswer(element)}
                        >
                            {element}
                        </button>
                    )
                })}
            </div>
      <div>
            <button 
                onClick={handleNext}
                disabled={nextBtnDisabled[0]}
                style={{backgroundColor: nextBtnDisabled[1]}}
            >
                Next question
            </button>

            <button className="button-exit" 
            onClick={handleExit}
            >
                EXIT
            </button>
            </div>
      </div>
    )
}

export default QuizCard