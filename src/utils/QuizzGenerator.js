import { useState } from "react"

function QuizzGenerator(api, apiData) {
    console.log("api: " + api)
    console.log("apiData: ", apiData)
    const [quizzList, setQuizzList] = useState({})

    // The QuizzList to be return, with always the same structure:
    //  {
    //  category: "history", 
    //      quizz: {
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
        setQuizzList(apiData.map(element => {
                
            })
        )
    }

    return quizzList
}

export default QuizzGenerator