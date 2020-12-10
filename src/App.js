import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect }  from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Prices from './components/Prices';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />  
          <Route path="/About" component={About} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Prices" component={Prices} />
          <Redirect to="/" /> 
          </Switch>
      </div>
    </Router>
  );
}


const Home = () => {
  return(
    <div className="homepage"></div>
  );
};

export default App;
