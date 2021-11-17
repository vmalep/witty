import { TriviaAPI } from "../utils/TriviaAPI";

const colorConvert = require('color-convert');

const Category = (props) => {
    const { selectedCategory, setSelectedCategory, setNextBtnDisabled } = props

    /**
     * Update the selectedCategory state and activate the Next button 
     * @param {object} element 
     */
    const handleCategory = (element) => {
        setSelectedCategory(element.catNb);
        setNextBtnDisabled(false)
    }

    return (
        <>
            <h2>Select your category</h2>
            <section className="flex-wrap">
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
            </section>
        </>
    )
}

export default Category;

