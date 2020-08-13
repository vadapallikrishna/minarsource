import React from 'react';
import './App.css';
import { LandingPage } from "./landing/page";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { NewNotebook } from "./newnotebook";

function App() {
  return (
    <div className="App">
        <Router>
	<Switch>
	<Route exact path="/">
	<LandingPage/>
	</Route>
	<Route path="/new">
	<NewNotebook/>
	</Route>
	</Switch>
	</Router>
    </div>
  );
}

export default App;
