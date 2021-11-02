import './App.css';
import { useState } from "react";
import Header from "./components/Header"
import Avatar from "./components/Avatar"
import UserName from "./components/UserName"
import Options from "./components/Options"
import QuizSection from './components/QuizSection'
import ScoreSection from './components/ScoreSection'

document.title = "Witty"

function App() {
  const [appStep, setAppStep] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [userName, setUserName] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState({});
  const [scorePc, setScorePc] = useState(0) // Score of the user in %
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedCat, setSeclectedCat] = useState("") //the category of question selected by the user (will it be a string or a number?)
  // 2BFixed: we should create a State that is an object and can receive all the shared parameters (userName, avatar, options choosen, score, etc.)

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
      && <Options 
          userName={userName} 
          selectedAvatar={selectedAvatar} 
          appStep={appStep} 
          setAppStep={setAppStep} 
          selectedCategory={selectedCategory}        
          setSelectedCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        /> 
      }

      {appStep === 2
      && <QuizSection
          setAppStep={setAppStep}
          selectedCategory={selectedCategory}
          setScorePc={setScorePc} />}

      {appStep === 3
      && <ScoreSection 
          setAppStep={setAppStep}
          userName={userName}
          scorePc={scorePc}/>}
    </div>
  );
}

export default App;
