import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {


  render() {
    return (
      <div>
        <Main /> {/* method to send dishes to Menu-component as props */}
      </div>
    );
  }

};

export default App;
