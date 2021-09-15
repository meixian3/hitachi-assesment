import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import Details from './components/Details'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
        <Route path="/" exact component={Home} />
        <Route path="/Details" exact component={Details} />

        </div>
      </BrowserRouter>
    )
  }
}
export default App;
