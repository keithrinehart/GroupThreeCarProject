import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect }  from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Prices from './components/Prices';
import Locations from './components/Locations';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />  
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/prices" component={Prices} />
          <Route path="/locations" component={Locations} />
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
