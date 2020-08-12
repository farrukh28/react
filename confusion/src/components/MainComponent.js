import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes'; // Importing shared Dishes file


class Main extends Component {

    constructor(props) {

        super(props);
        this.state = {
            dishes: DISHES, // Importing DISHES constant and assigning to dishes
            selectedDish: null
        };
    };

    onDishSelect(dishId) {
        this.setState(
            { selectedDish: dishId }
        );
    }


    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="#">Farrukh</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> {/* method to send dishes to Menu-component as props */}
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }

};

export default Main;
