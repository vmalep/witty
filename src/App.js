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

  return (
    <div className="App">
      <Header />
      {!userName ? <Avatar /> : null}
      {!userName ? <InputBox setUserName={setUserName} /> : null}
      <Category />
      {userName ? <QuizzSection /> : null}
    </div>
  );
}

export default App;
