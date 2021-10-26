
const Category = () => {
    const categories = ["history", "sport", "art"]
    return (
        <div class="usernamebox">
            {categories.map((element, index) => {
                return (
                    <button key={index} >{element}</button>
                )
            })}
        </div>
    )
}

export default Category;

/*onClick={() => props.checkAnswer(element)}*/