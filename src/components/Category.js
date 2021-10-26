
const Category = (props) => {
    const {userName, selectedAvatar, appStep, setAppStep} = props

    const categories = ["history", "sport", "art"]

    const handleClick = () => {
        setAppStep(appStep + 1)
    }

    return (
        <div class="usernamebox">
            {categories.map((element, index) => {
                return (
                    <button key={index} onClick={handleClick} >{element}</button>
                )
            })}
        </div>
    )
}

export default Category;

/*onClick={() => props.checkAnswer(element)}*/