import './App.css';
import { useState } from "react";
import Header from "./components/Header"
import Avatar from "./components/Avatar"
import UserName from "./components/UserName"
import Category from "./components/Category"
import QuizzSection from './components/QuizzSection';

document.title = "Witty"

function App() {
  const [appStep, setAppStep] = useState(0)

  const [userName, setUserName] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState({});

  return (
    <div className="App">
      <Header />
      {appStep === 0 ? <Avatar  selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar}/> : null}
      {appStep === 0 ? <UserName setUserName={setUserName} setAppStep={setAppStep}/> : null}
      {appStep === 1 ? <Category /> : null}
      {appStep === 2 ? <QuizzSection /> : null}
    </div>
  );
}

export default App;
