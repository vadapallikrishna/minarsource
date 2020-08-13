import React from 'react';
import './App.css';
import { LandingPage } from "./landing/page";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { NewNotebook } from "./newnotebook";
import { EditNotebook } from "./editnotebook";

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
	<Route path="/edit">
	<EditNotebook/>
	</Route>
	</Switch>
	</Router>
    </div>
  );
}

export default App;
