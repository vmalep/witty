import './App.css';
import { useState } from "react";
import Header from "./components/Header"
import Options from "./components/Options"
import UserInit from "./components/UserInit"
import QuizSection from './components/QuizSection'
import ScoreSection from './components/ScoreSection'
import Footer from "./components/Footer"

document.title = "Witty"

function App() {
  const [appStep, setAppStep] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(""); //the category of question selected by the user (will it be a string or a number?)
  const [userName, setUserName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState({});
  const [selectedDifficulty, setSelectedDifficulty] = useState("None");
  const [countDown, setCountDown] = useState(false); // In seconds
  const [results, setResults] = useState([]); // results.catNb and results.scorePc for each round of question

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
        && <Options
          userName={userName}
          selectedAvatar={selectedAvatar}
          appStep={appStep}
          setAppStep={setAppStep}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          countDown={countDown}
          setCountDown={setCountDown}
        />
      }

      {appStep === 2
        && <QuizSection
          setAppStep={setAppStep}
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          countDown={countDown}
          setResults={setResults}
          results={results} />}

      {appStep === 3
        && <ScoreSection
          setAppStep={setAppStep}
          userName={userName}
          results={results}/>}
      <Footer />
    </div>
  );
}

export default App;
