import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {


  render() {
    return (

      <BrowserRouter>
        <div>
          <Main /> {/* method to send dishes to Menu-component as props */}
        </div>
      </BrowserRouter>

    );
  }

};

export default App;
