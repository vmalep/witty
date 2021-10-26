import { useEffect, useState } from "react";

const QuizzCard = (props) => {

    console.log("props: ", props)

    const addCorrectAnswerAndShuffle = (correct_answer) => {
        const newPossibleAnswers = possibleAnswers.slice();
        newPossibleAnswers.push(correct_answer);
        newPossibleAnswers.sort(() => Math.random() - 0.5);
        setPossibleAnswers(newPossibleAnswers);
    }

    const [possibleAnswers, setPossibleAnswers] = useState(props.quizzQuestion.incorrect_answers)

    useEffect(() => {
        addCorrectAnswerAndShuffle(props.quizzQuestion.correct_answer)
    }, [])

    return (
        <>
            <p>score: {props.score}</p>
            <p>question {props.questCount + 1}: {props.quizzQuestion.question}</p>
            <div>
                {possibleAnswers.map((element, index) => {
                return (
                    <button key={index} onClick={() => props.checkAnswer(element)}>{element}</button>
                )
                })}
            </div>

        </>
    )
}

export default QuizzCard