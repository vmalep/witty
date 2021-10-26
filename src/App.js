import './App.css';
import { useState } from "react";
import Header from "./components/Header"
import Avatar from "./components/Avatar"
import InputBox from "./components/InputBox"
import QuizzSection from './components/QuizzSection';

document.title = "Witty"

function App() {
  const [userName, setUserName] = useState(null);

  return (
    <div className="App">
      <Header />
      {!userName ? <Avatar /> : null}
      {!userName ? <InputBox setUserName={setUserName} /> : null}
      {userName ? <QuizzSection /> : null}
    </div>
  );
}

export default App;
