import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');//wwhether dark mode is enabled or not
  /*const [alert, setAlert] = useState('light');

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);

    },1500);
  }*/

  const toggleMode =() => {
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      //showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils- Dark';
      //for blinking title
      /*setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 1500);*/
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar mode={Mode} toggleMode={toggleMode}/>
      {/*<Alert alert={alert}/>*/}
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <TextForm  heading="Enter text for analysis" />
          </Route>
        </Switch>
      {/*<TextForm  heading="Enter text for analysis" />*/}
      {/*showAlert={showAlert}*/}
      {/*<About/>*/}
      </div>
      </Router>
    </>
  );
}

export default App;
