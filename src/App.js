import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light');
  const toggleMode =() => {
    if(mode === 'light'){
      setmode = 'dark';
    }
    else{
      setmode = 'light';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      {<TextForm heading="Enter text for analysis" />}
      //<About></About>


      </div>
      
    </>
  );
}

export default App;
