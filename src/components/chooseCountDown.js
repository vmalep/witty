const ChooseCountDown = (props) => {
    const {countDownTime, setCountDownTime} = props;
    
    const handleCountDown = (element) => {

    }

    return (
           <>
               <h2>Choose your countdown time (optional)</h2>
               <div >
                   <p>{countDownTime} seconds</p>
               </div>
          </>
       )
   }

   export default ChooseCountDown;