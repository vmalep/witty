import { TriviaAPI } from "../utils/TriviaAPI";

const colorConvert = require('color-convert');

const Category = (props) => {
    const { selectedCategory, setSelectedCategory, setNextBtnDisabled } = props

    const handleCategory = (element) => {
        setSelectedCategory(element.catNb);
        setNextBtnDisabled(false)
    }

    return (
        <>
            <h2>Select your category</h2>
            {TriviaAPI.map((category, index) => {

                const primaryH = colorConvert.keyword.hsl(category.color)[0]

                return (
                    <button className="category-btn"
                        key={index}
                        onClick={() => handleCategory(category)}
                        style={{
                            backgroundColor: selectedCategory !== category.catNb
                                ? `hsl(${primaryH}, 70%, 60%)`
                                : `hsl(${primaryH}, 80%, 35%)`
                        }}
                    >{category.catName}</button>
                )
            })}
        </>
    )
}

export default Category;

