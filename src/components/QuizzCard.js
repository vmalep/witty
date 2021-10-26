import { useEffect, useState } from "react";
import './QuizzCard.css'

const QuizzCard = (props) => {

    // Add the correct answer to the possible ones and shuffle them all
    const addCorrectAnswerAndShuffle = () => {
        const shuffledAnswers = possibleAnswers.slice()
        /* newPossibleAnswers.push(correct_answer) */
        shuffledAnswers.sort(() => Math.random() - 0.5)
        setPossibleAnswers(shuffledAnswers)
    }

    // List all the options (incorrect answers and then the correct one)
    const [possibleAnswers, setPossibleAnswers] = useState(props.quizzQuestion.incorrect_answers)

    useEffect(() => {
        const allAnswers = props.quizzQuestion.incorrect_answers.slice()
        allAnswers.push(props.quizzQuestion.correct_answer)
        setPossibleAnswers(allAnswers)
    }, [props.questCount])

    useEffect(() => {
        const shuffledAnswers = possibleAnswers.slice()
        shuffledAnswers.sort(() => Math.random() - 0.5)
        setPossibleAnswers(shuffledAnswers)
    }, [])

    return (
        <div className="quizz-card">
            <p>score: {props.score}</p>
            <p>question {props.quizzQuestion.idNum}: {props.quizzQuestion.question}</p>
            <div>
                {possibleAnswers.map((element, index) => {
                    return (
                        <button key={index} onClick={() => props.checkAnswer(element)}>{element}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default QuizzCard