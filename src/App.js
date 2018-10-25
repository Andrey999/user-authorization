import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Authorization from './components/Authorization'
import Home from './components/Home'
import Admin from './components/Admin'
import About from './components/About'


import './App.css';

class App extends Component {

  render() {
    return (
        <Router basename="authorization">
            <div className="App">
                <Route exact path="/" component={ Authorization } />
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/admin" component={Admin}/>
            </div>
        </Router>
    );
  }
}

export default App;

