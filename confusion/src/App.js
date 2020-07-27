import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes'; // Importing shared Dishes file

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      dishes: DISHES, // Importing DISHES constant and assigning to dishes
    };
  };


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="#">Farrukh</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /> {/* method to send dishes to Menu-component as props */}
      </div>
    );
  }

};

export default App;
