import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './scss/styles.scss';

class App extends Component {
  render() {
    return(
      <h1>Halló Heimur!!!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
