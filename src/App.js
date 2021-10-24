import './App.css';
import {useState} from "react";
import Header from "./components/Header.js"
import InputBox from "./components/InputBox.js"


function App() {
  const [userName, setUserName] = useState(null);
  
  return (
      <div>
        <Header />
        {userName ? (
          <></>
        ) : <InputBox setUserName={setUserName} />}
      </div> 
  );
}

export default App;
