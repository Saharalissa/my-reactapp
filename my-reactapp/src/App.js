import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Languages from './languages/Languages'

function App() {
  return (
    <div className="App">
      <Router className="container">
        <Route exact path="/:language" component={Languages} key={"/:language"} />
      </Router>
    </div>
  );
}





export default App;

