import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>

          <Switch>
            <Route exact path="/"><News headline="New" key="general" pageSize={9} country="in" category="general"/></Route> 
            <Route exact path="/business"><News headline="Business" key="business" pageSize={9} country="in" category="business"/></Route> 
            <Route exact path="/entertainment"><News headline="Entertainment"  key="entertainment" pageSize={9} country="in" category="entertainment"/></Route> 
            {/* <Route exact path="/general"><News key="general" pageSize={9} country="in" category="general"/></Route>  */}
            <Route exact path="/health"><News headline="Health"  key="health" pageSize={9} country="in" category="health"/></Route> 
            <Route exact path="/science"><News headline="Science"  key="science" pageSize={9} country="in" category="science"/></Route> 
            <Route exact path="/sports"><News headline="Sports"  key="sports" pageSize={9} country="in" category="sports"/></Route> 
            <Route exact path="/technology"><News headline="Technology"  key="technology" pageSize={9} country="in" category="technology"/></Route> 
          </Switch>
        </Router>
          
      </div>
    )
  }
}

