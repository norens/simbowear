import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="container">
          <div className="wrapper">
              <div className="content">
                  <div className="item">
                      <h1>COMING SOON</h1>
                      <p>This website is under construction.</p>
                      <img src={logo} alt={"logo"} className={"logo"}/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
