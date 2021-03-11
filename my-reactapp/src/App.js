import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Languages from './components/languages/Languages';
import Languages_smile from './components/languages/languages_1_2_smile';
import Home from './components/Home';
import Quality from './components/quality';
import Quality_Arabic from './components/quality_arabic';
import Confirmation from './components/emailConfirmation';
import Appointment from './components/appointment';

function App() {
  return (
    <div className="App">
      <Router className="container">
        <Route exact path="/"><Redirect to="/home" /></Route>
        {/* <Route exact path="/:language" component={Languages} key={"/:language"} /> */}
        <Route exact path="/:language" component={Languages_smile}  key={"/:language"} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/:language/confirmation" component={Confirmation} />
        <Route exact path="/:language/appointment" component={Appointment} />
        {/* <Route exact path="/quality" component={Quality} />
        <Route exact path="/quality_arabic" component={Quality_Arabic} /> */}
      </Router>
    </div>
  );
}



export default App;

