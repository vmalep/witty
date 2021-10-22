const QuizzCard = (props) => {

    return (
        <>
        {
            props.quizzList.map((quizz, index) => {
                return (
                <div key={index}>
                    <p>{quizz.category}</p>
                    <p>{quizz.question}</p>
                </div>
                )
            })
        }
        </>
    )

}

export default QuizzCard