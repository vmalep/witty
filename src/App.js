import './App.css';
import { useState } from "react";
import Header from "./components/Header"
import Avatar from "./components/Avatar"
import UserName from "./components/UserName"
import Category from "./components/Category"
import QuizSection from './components/QuizSection'
import ScoreSection from './components/ScoreSection'

document.title = "Witty"

function App() {
  const [appStep, setAppStep] = useState(0)

  const [userName, setUserName] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState({});
  const [scorePc, setScorePc] = useState(0) // Score of the user in %
  const [selectedCat, setSeclectedCat] = useState("") //the category of question selected by the user (will it be a string or a number?)

  return (
    <div className="App">
      <Header />

      {appStep === 0 
      && <>
          <Avatar selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar}/> 
          <UserName setUserName={setUserName} appStep={appStep} setAppStep={setAppStep} />
        </>
      }

      {appStep === 1 
      && <Category 
          userName={userName} 
          selectedAvatar={selectedAvatar} 
          appStep={appStep} 
          setAppStep={setAppStep}
          setSeclectedCat={setSeclectedCat}
        /> 
      }

      {appStep === 2 && <QuizSection selectedCat={selectedCat} scorePc={scorePc} setScorePc={setScorePc} />}

      {appStep === 3 && <ScoreSection userName={userName} scorePc={scorePc}/>}
    </div>
  );
}

export default App;
