import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import ActivitiesContainer from './components/ActivitiesContainer';
import ActivityDetails from './components/ActivityDetails';
import EventContainer from './components/EventContainer';
import NavBar from './components/NavBar'

function App() {


  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }
  return (
    <div className="App">
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
              <Route path = "/events">
                <EventContainer />
                </Route>
              <Route path = "*">
                <h1>404 Not Found</h1>
              </Route>
              </Switch>
        </Router>
        <header className="App-header">
        <h1 className="display-4">Welcome to the Discovery App!</h1>
        <p className="lead">Use your online life to live life offline.</p>
      </header>
    </div>
  );
}

export default App;
