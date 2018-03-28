import React, { Component } from 'react';
import './App.css';

import CatCard from './Components/CatCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        Cats
        <CatCard name="CatName" />
      </div>
    );
  }
}

export default App;
