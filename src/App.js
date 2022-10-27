// import logo from './logo.svg';
// import './App.css';
import Navbar from './Components_text_utils/Navbar';
import Textcomp from './Components_text_utils/Textcomp';
import Alert from './Components_text_utils/Alert';
import About from './Components_text_utils/About';
import { useState } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const toggleMode = () => {
    mode === 'light' ? setmode('dark') : setmode('light')
    mode === 'light' ? document.body.style.backgroundColor = '#212529' : document.body.style.backgroundColor = '#f8f9fa'
    showAlert(mode === 'light' ? `Dark mode has been enabled` : `Dark mode has been disabled`, "success")
  }

  return (
    <>
    <div className="App">
      <Router>
        <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} about={"About"} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/Textify">
          <Textcomp showAlert={showAlert} mode={mode} />
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
