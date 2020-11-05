import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import landing from './components/landing';
import login from './components/login';
import Register from './components/Register';
import profile from './components/profile';
//import landing from './components/landing';

class App extends Component {
  render()
  {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={landing} />
        <div className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={login} />
        <Route exact path="/profile" component={profile} />
        
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
