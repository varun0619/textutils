import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') //whether dark mode enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light' )
    document.body.classList.remove('bg-dark' )
    document.body.classList.remove('bg-warning' )
    document.body.classList.remove('bg-success' )
    document.body.classList.remove('bg-danger' )
   
  }

  const toggleMode = (cls) => {
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-' +cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1F2245'
      showAlert(" Dark mode has been enabled 🌙 ", " success ")
      // document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled ", " success ")
      // document.title = 'TextUtils - Light Mode';

    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/>  IF WE WANT DEAFAULT CODE*/}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Switch> */}
          <TextForm showAlert={showAlert} heading="Try Textutils - Word Counter ,Character Counter,Remove Extra Spaces" mode={mode} />
          {/* <About /> */}
        </div>
      {/* </Router> */}


    </>
  );
}

export default App;



// ITS default code****************************************

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <>
//     <h1>This is me</h1>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with VaruN
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

// export default App;
