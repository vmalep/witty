import './App.css';
import { useState } from "react";
import Header from "./components/Header"
import UserInit from "./components/UserInit"
import Category from "./components/Category"
import QuizSection from './components/QuizSection'
import ScoreSection from './components/ScoreSection'

document.title = "Witty"

function App() {
  const [appStep, setAppStep] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState({});
  const [scorePc, setScorePc] = useState(0) // Score of the user in %
  const [selectedCat, setSeclectedCat] = useState("") //the category of question selected by the user (will it be a string or a number?)

  return (
    <div className="App">
      <Header />

      {appStep === 0 
      && <UserInit
        selectedAvatar={selectedAvatar}
        setSelectedAvatar={setSelectedAvatar}
        userName={userName}
        setUserName={setUserName}
        setAppStep={setAppStep} />
      }

      {appStep === 1 
      && <Category 
          userName={userName} 
          selectedAvatar={selectedAvatar} 
          appStep={appStep} 
          setAppStep={setAppStep}         
          setSelectedCategory={setSelectedCategory}
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
