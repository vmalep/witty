import { useEffect, useState } from "react";
import './QuizCard.css'

const QuizCard = (props) => {
    const {quizQuestion, checkAnswer, score} = props

    return (
        <div className="quiz-card">
            <p>score: {score}</p>
            <p>question {quizQuestion.questNum}: {quizQuestion.question}</p>
            <div>
                {quizQuestion.possible_answers.map((element, index) => {
                    return (
                        <button key={index} onClick={() => checkAnswer(element)}>{element}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default QuizCard