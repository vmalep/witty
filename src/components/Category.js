 const Category = (props) => {
    const {userName, selectedAvatar, appStep, setAppStep} = props
    const categories = ["History", "Sport","Art","Music"]
    const level = ["Easy","Medium","Hard"]

    const handleClick = () => {
        setAppStep(appStep + 1)
    }

     return (
            <>
            <h2>Select your Category</h2>
            <div className = "level">
                {level.map((element,index) => {
                    return(
                        <button key={index}>{element}</button>
                    )
                    })}
            </div>
    
              <div className="usernamebox">
                  {categories.map((element , index) => {
                      return(
                          <button key={index}>{element}</button>
                      )
                  })}
                  </div>
                  <button className="button"
                onClick={handleClick}>NEXT</button>
           </>
        )
    }

export default Category;

 /*onClick={() => props.checkAnswer(element)}*/