const QuizzCard = (props) => {

    return (
        <>
            <p>{props.question}</p>
            <p>{props.correct_answer}</p>
            <ul>{props.incorrect_answers.map((element, index) => {
                return (
                    <li>{element}</li>
                )
            })}</ul>
        </>
    )
}

export default QuizzCard