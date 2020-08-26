import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { Provider } from 'react-redux'
import { configureStore } from './redux/configureStore';
import './App.css';


const store = configureStore(); // creates a store


class App extends Component {

  render() {


    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

};

export default App;
