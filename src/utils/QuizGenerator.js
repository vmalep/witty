import ShuffleArray from './ShuffleArray'
import DecodeSpecialChar from './DecodeSpecialChar'

/**
 * Get the downloaded API data and format it into the right array of objects format
 * @param {string} api 
 * @param {array} apiData 
 * @returns {array}
 */
function QuizGenerator(api, apiData) {
    // The QuizList to be return, with always the same structure:
    // {
    //          [
    //              category: 'history'
    //              questNum: 1, 
    //              difficulty: 'medium',   
    //              question: 'Which of these countries was sea charted in 1500 by the Portuguese maritime explorations?',
    //              possible_answers: ['India', 'Mozambique', 'Madagascar', 'Brasil'],
    //              correct_answer: 'Brazil'
    //          ],
    //          [
    //              category: 'history'
    //              questNum: 2,
    //              difficulty: 'medium',
    //              question: 'Which infamous European traitor was known as "the last person to enter Parliament with honest intentions"?',
    //              possible_answers: ['Robert Catesby', 'Guy Fawkes', 'Francis Tresham', 'Everard Digby'],
    //              correct_answer: 'Guy Fawkes'
    //          ]
    //          [...]
    //  }

    function possibleAnswersGenerator(array, string) {
        const possibleAnswers = array.map(element => DecodeSpecialChar(element))
        possibleAnswers.push(DecodeSpecialChar(string))
        
        return ShuffleArray(possibleAnswers)
    }

    function triviaGenerator(apiData) {

        const newQuizList = apiData.map((element, index) => ({
                    category: element.category,
                    questNum: index + 1,
                    difficulty: element.difficulty,
                    question: DecodeSpecialChar(element.question),
                    correct_answer: DecodeSpecialChar(element.correct_answer),
                    possible_answers: possibleAnswersGenerator(element.incorrect_answers, element.correct_answer)
            })
        )

        return newQuizList
    }

    return triviaGenerator(apiData)
}

export default QuizGenerator