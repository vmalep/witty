import './App.css';
import { useState } from "react";
import Header from "./components/Header"
import Avatar from "./components/Avatar"
import UserName from "./components/UserName"
import Category from "./components/Category"
import QuizSection from './components/QuizSection';

document.title = "Witty"

function App() {
  const [appStep, setAppStep] = useState(0)

  const [userName, setUserName] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState({});

  return (
    <div className="App">
      <Header />

      {appStep === 0 
      ? <>
          <Avatar selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar}/> 
          <UserName setUserName={setUserName} appStep={appStep} setAppStep={setAppStep} />
        </>
      : null}

      {appStep === 1 
      ? <Category 
          userName={userName} 
          selectedAvatar={selectedAvatar} 
          appStep={appStep} 
          setAppStep={setAppStep}
        /> 
      : null}

      {appStep === 2 ? <QuizSection /> : null}
    </div>
  );
}

export default App;
