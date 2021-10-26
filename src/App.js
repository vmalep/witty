import './App.css';
import { useState } from "react";
import Header from "./components/Header"
import Avatar from "./components/Avatar"
import InputBox from "./components/InputBox"
import Category from "./components/Category"
import QuizzSection from './components/QuizzSection';

document.title = "Witty"

function App() {
  const [userName, setUserName] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState({});

  return (
    <div className="App">
      <Header />
      {!userName ? <Avatar  selectedAvatar={selectedAvatar} setSelectedAvatar={setSelectedAvatar}/> : null}
      {!userName ? <InputBox setUserName={setUserName} /> : null}
      <Category />
      {userName ? <QuizzSection /> : null}
    </div>
  );
}

export default App;
