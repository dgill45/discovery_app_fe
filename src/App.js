import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import ActivitiesContainer from './components/ActivitiesContainer';
import ActivityDetails from './components/ActivityDetails';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-4">Welcome to the Discovery App!</h1>
        <p className="lead">Use your online life to live life offline.</p>
        <Router>
            <NavBar />
              <Switch>
              <Route exact path= "/">
                <Home />
              </Route>
              <Route path = '/activities/:id'>
                <ActivityDetails />
              </Route>
              <Route path = "/activities">
                <ActivitiesContainer />
              </Route>
              <Route path = "*">
                <h1>404 Not Found</h1>
              </Route>
              </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
