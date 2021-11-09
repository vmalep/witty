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
  const [scorePc, setScorePc] = useState() // Score of the user in %
  const [selectedDifficulty, setSelectedDifficulty] = useState("None");
 

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
        />
      }

      {appStep === 2
        && <QuizSection
          setAppStep={setAppStep}
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          setScorePc={setScorePc} />}

      {appStep === 3
        && <ScoreSection
          setAppStep={setAppStep}
          userName={userName}
          scorePc={scorePc} />}
      <Footer />
    </div>
  );
}

export default App;
