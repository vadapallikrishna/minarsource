import React from 'react';
import './App.css';
import { LandingPage } from "./landing/page";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { NewNotebook } from "./newnotebook";
import { EditNotebook } from "./editnotebook";
import { ViewNotebook } from "./viewnotebook";
import { NewCollection } from "./newcollection";
import { ViewCollection } from "./viewcollection";
import { CodeSearch } from "./codesearch";
import { CodeAbout } from "./codeabout";

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
	<Route path="/notebook">
	<ViewNotebook/>
	</Route>
	<Route path="/collection/new">
	<NewCollection/>
	</Route>
	<Route path="/collection/view">
	<ViewCollection/>
	</Route>
	<Route path="/search">
	<CodeSearch/>
	</Route>
	<Route path="/explore/view">
	<CodeAbout/>
	</Route>
	</Switch>
	</Router>
    </div>
  );
}

export default App;
