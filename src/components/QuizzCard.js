const QuizzCard = (props) => {
    console.log("props = ", props)

    return (
        <>
            <p>{props.quizzQuestion.question}</p>
            <p>{props.quizzQuestion.correct_answer}</p>
            <ul>{props.quizzQuestion.incorrect_answers.map((element, index) => {
                return (
                    <li>{element}</li>
                )
            })}</ul>
        </>
    )
}

export default QuizzCard