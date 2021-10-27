import { useEffect, useState } from "react";
import './QuizCard.css'

const QuizCard = (props) => {

    // Add the correct answer to the possible ones and shuffle them all
    const addCorrectAnswerAndShuffle = () => {
        const shuffledAnswers = possibleAnswers.slice()
        /* newPossibleAnswers.push(correct_answer) */
        shuffledAnswers.sort(() => Math.random() - 0.5)
        setPossibleAnswers(shuffledAnswers)
    }

    //This part decodes special characters like &#039;
    function decodeSpecialChar(string) {
        const parser = new DOMParser();
        const decodedString = parser.parseFromString(`<!doctype html><body>${string}`, 'text/html').body.textContent;
        /* console.log(decodedString); */
        return decodedString
    }

    // List all the options (incorrect answers and then the correct one)
    const [possibleAnswers, setPossibleAnswers] = useState(props.quizQuestion.incorrect_answers)

    useEffect(() => {
        const allAnswers = props.quizQuestion.incorrect_answers.slice()
        allAnswers.push(props.quizQuestion.correct_answer)
        setPossibleAnswers(allAnswers)
    }, [props.questCount])

    useEffect(() => {
        const shuffledAnswers = possibleAnswers.slice()
        shuffledAnswers.sort(() => Math.random() - 0.5)
        setPossibleAnswers(shuffledAnswers)
    }, [])

    const decodedQuest = decodeSpecialChar(props.quizQuestion.question)

    return (
        <div className="quiz-card">
            <p>score: {props.score}</p>
            <p>question {props.quizQuestion.idNum}: {decodedQuest}</p>
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

export default QuizCard