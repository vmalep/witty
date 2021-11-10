const ChooseCountDown = (props) => {
    const {countDown, setCountDown} = props;
    
    function handleCountDown() {
        setCountDown(!countDown)
    }

    return (
           <>
               <h2>Countdown <input type="checkbox" onChange={handleCountDown} checked={countDown} /></h2>
          </>
       )
   }

   export default ChooseCountDown;