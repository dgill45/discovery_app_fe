import './App.css';
import React from "react";
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-4">Welcome to the Discovery App!</h1>
        <p className="lead">Use your online life to live life offline.</p>
      </header>
      <Home />
    </div>
  );
}

export default App;
