
import { useState } from 'react';
import './App.css';
// import About from './components/About';   
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ALERT from './components/ALERT';
// import React, { useState } from 'react' ;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      showAlert("Light mode has been enabled", "success");
    }
    else {
      document.body.style.backgroundColor = 'grey';
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
    }
  }
  const togglemode1 = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#a0aba2  ';

  }
  const togglemode2 = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#42a350';

  }
  const togglemode3 = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#953d3d';

  }
  const togglemode4 = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#cbc138';

  }
  const togglemode5 = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#0f7e94';

  }

  return (
    <>
      {/* <Router> */}

        <Navbar title="TextUtils" abouttext="About Us " mode={mode} togglemode={togglemode} togglemode1={togglemode1} togglemode2={togglemode2} togglemode3={togglemode3} togglemode4={togglemode4} togglemode5={togglemode5} />
        <ALERT alert={alert} />


        <div className="container my-5">
        {/* <Routes>/ */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={ } /> */}
            <TextForm heading="Enter The Text" mode={mode} showAlert={showAlert} />
          {/* </Routes> */}
          {/* <About /> */}
        </div>
      {/* </Router> */}
    </>

  );
}

export default App;