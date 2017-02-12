import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { date } = this.context.store.getState();

    return (
      <div className="App">
        App {date.toLocaleString()}
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
};

export default App;
