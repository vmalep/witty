// Recieved the chosen options as argument, build the api url and run axio.
// Return apiData
function QuizApiUrl(api, selectedCategory, selectedDifficulty) {

    console.log(`Launching QuizApiFetch for ${api}`) // to be adapted if later we use different API

    console.log('test')
    
    // To be adapted once those options will be available in the previous step
    const catParam = selectedCategory ? `&category=${selectedCategory}` : ''
    const amountParam = '?amount=10'
    const typeParam = '&type=multiple' //questType ? `&type=${questType}`: ''
    const difficultyParam = selectedDifficulty !== "None" ? `&difficulty=${selectedDifficulty.toLowerCase()}` : '' 

    const baseUrl = "https://opentdb.com/api.php"

    const quizURL = `${baseUrl}${amountParam}${catParam}${difficultyParam}${typeParam}`
    
    return quizURL
}

export default QuizApiUrl