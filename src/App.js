import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/index.js"
import Login from "./components/Login/index.js"
import Body from "./components/Body/index.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Login />
    </div>
  );
}

export default App;
