import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Languages from './components/languages/Languages';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router className="container">
        <Route exact path="/"><Redirect to="/home" /></Route>
        {/* <Route exact path="/:language" component={Languages} key={"/:language"} /> */}
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  );
}





export default App;

