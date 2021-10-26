const Category = () => {
    const categories = ["History", "Sport","Art","Music"]
    const level = ["Easy","Medium","Hard"]
    
        return (
            <>
            <h2>Select your Category</h2>
            <div class = "level">
                {level.map((element,index) => {
                    return(
                        <button key={index}>{element}</button>
                    )
                    })}
            </div>
    
              <div class="usernamebox">
                  {categories.map((element , index) => {
                      return(
                          <button key={index}>{element}</button>
                      )
                  })}
                  </div>
           </>
        )
    }
export default Category ;
/*onClick={() => props.checkAnswer(element)}*/