import React, { Component } from 'react';
import '../App.css';
import SearchBarContainer from './containers/SearchBarContainer';
import RecipeListContainer from './containers/RecipeListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Finder</h1>
          <h1 className="App-title">Home</h1>
        </header>
        <SearchBarContainer />
        <RecipeListContainer />
      </div>
    );
  }
}

export default App;
