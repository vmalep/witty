import { useState } from "react"

function QuizGenerator(api, apiData) {
    console.log("api: " + api)
    console.log("apiData: ", apiData)
    /* const [quizList, setQuizList] = useState({}) */

    // The QuizList to be return, with always the same structure:
    //  {
    //  category: "history", 
    //      quiz: {
    //          [
    //              questNum: 1, 
    //              difficulty: 'medium',   
    //              question: 'Which of these countries was sea charted in 1500 by the Portuguese maritime explorations?',
    //              possible_answers: ['India', 'Mozambique', 'Madagascar', 'Brasil'],
    //              correct_answer: 'Brazil'
    //          ],
    //          [
    //              questNum: 2,
    //              difficulty: 'medium',
    //              question: 'Which infamous European traitor was known as "the last person to enter Parliament with honest intentions"?',
    //              possible_answers: ['Robert Catesby', 'Guy Fawkes', 'Francis Tresham', 'Everard Digby'],
    //              correct_answer: 'Guy Fawkes'
    //          ]
    //          [...]
    //      }
    //  }
    // Requisites:
    //  1) possible_answers must contain the right answer and be shuffled
    //  2) Special HTML characters like &quot; must be decoded
    
    function shuffleArray(array) => {
        const shuffledarray = array.slice()
        shuffledarray.sort(() => Math.random() - 0.5)
        return shuffledarray
    }

    //This part decodes special characters like &#039;
    function decodeSpecialChar(string) {
        const parser = new DOMParser();
        const decodedString = parser.parseFromString(`<!doctype html><body>${string}`, 'text/html').body.textContent;
        /* console.log(decodedString); */
        return decodedString
    }

    function triviaGenerator(apiData) {

        const newQuizList = apiData.map((element, index) => ({
                category: element.category,
                quiz: {
                    questNum: index + 1,
                    difficulty: element.difficulty,
                    question: decodeSpecialChar(element.question),
                    correct_answer: shuffleArray(element.correct_answer.push(element.question)),
                    possible_answers: element.possible_answers
                }
            })
        )
        return newQuizList
    }

    return triviaGenerator(apiData)
}

export default QuizGenerator