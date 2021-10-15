import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import ActivitiesContainer from './components/ActivitiesContainer';
import ActivityDetails from './components/ActivityDetails';
import EventContainer from './components/EventContainer';
import NavBar from './components/NavBar'
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {


 
  return (
    <div className="App">
        <Router>
            <NavBar />
              <Switch>
              <Route exact path= "/">
                <Home />
              </Route>
              <Route path= "/login">
                <Login />
              </Route>
              <Route path= "/signup">
                <SignUp />
              </Route>
              <Route path = '/activities/:id'>
                <ActivityDetails />
              </Route>
              <Route path = "/activities">
                <ActivitiesContainer />
              </Route>
              <Route path = "/events">
                <EventContainer />
              </Route>
              <Route path = "*">
                <h1>404 Not Found</h1>
              </Route>
              </Switch>
        </Router>
        
    </div>
  );
}

export default App;
