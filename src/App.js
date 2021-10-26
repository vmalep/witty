import './App.css';
import {useState} from "react";
import Header from "./components/Header.js"
import InputBox from "./components/InputBox.js"
import QuizzSection from './components/QuizzList';


function App() {
  const [userName, setUserName] = useState(null);
  
  return (
      <div className="App">
        <Header />
        {userName ? (
          <></>
        ) : <InputBox setUserName={setUserName} />}
      <QuizzSection />
    </div>
  );
}

export default App;
