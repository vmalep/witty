/**
 * Recieved the chosen options as argument, build the api url and run axio
 * 
 * @param {string} api 
 * @param {integer} selectedCategory 
 * @param {string} selectedDifficulty 
 * @returns {string}
 */
function QuizApiUrl(api, selectedCategory, selectedDifficulty) {

    const catParam = selectedCategory ? `&category=${selectedCategory}` : ''
    const amountParam = '?amount=10'
    const typeParam = '&type=multiple'
    const difficultyParam = selectedDifficulty !== "None"
    ? `&difficulty=${selectedDifficulty.toLowerCase()}`
    : '' 

    const baseUrl = "https://opentdb.com/api.php"

    const quizURL = `${baseUrl}${amountParam}${catParam}${difficultyParam}${typeParam}`
    
    return quizURL
}

export default QuizApiUrl