import React from 'react';
import './App.css';
import {client} from './components/client';
import Posts from './components/Posts';
import Shop from './components/Shop';

class App extends React.Component {
  state = {
     articles: []  
  }
  componentDidMount() {
      client.getEntries()
      .then((response) => {
          console.log(response);
          this.setState({
            articles: response.items
          })

      })
      .catch(console.error)
  }
  render() {
      return (
          <div className='Apps'>
              <div className='container'>
                  <header>
                      <div className='wrapper'>
                      <Nav />
                        <Switch>
                        <Route path="/" exact component={Home} />  
                        <Route path="/About" component={About} />
                        <Route path="/Shop" component={Shop} />
                        <Route path="/Prices" component={Prices} />
                        <Redirect to="/" /> 
                        </Switch>
                      </div>
                  </header>
                  <main>
                      <div className='wrapper'>
                        <Posts posts={this.state.articles} />
                      </div>
                  </main>
               </div>
          </div>
      );
  }
      
}

export default App;
