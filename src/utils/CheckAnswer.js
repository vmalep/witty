import GetRandomGif from "./GetRandomGif";
    /**
     * Receive the selected answer value and check it with the correct one
     * If correct, increment the score value by 1 and select a 'right' gif
     * Otherwise select a 'wrong' gif
     * Then activate the Next button
     * @param {string} response 
     */
     function CheckAnswer(
         response,
         setSelectedAnswer,
         quizList,
         questCount,
         setScore,
         score, 
         setGifSource,
         setNextBtnDisabled
         ) {
                 setSelectedAnswer(response);
        if (response === quizList[questCount].correct_answer) {
            setScore(score + 1)
            setGifSource(GetRandomGif("right"))
        } else setGifSource(GetRandomGif("wrong"))

        setNextBtnDisabled(false)
    }

    export default CheckAnswer