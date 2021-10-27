import { useState } from "react"

function QuizGenerator(api, apiData) {
    console.log("api: " + api)
    console.log("apiData: ", apiData)
    const [quizList, setQuizList] = useState({})

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
    
    const triviaGenerator = () => {
        setQuizList(apiData.map(element => {

            })
        )
    }

    return quizList
}

export default QuizGenerator