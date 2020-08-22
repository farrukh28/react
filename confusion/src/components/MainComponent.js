import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent'; // importing Header
import Footer from './FooterComponent'; // importing Footer
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes'; // Importing shared Dishes file
import { Route, Switch, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {

        super(props);
        this.state = {
            dishes: DISHES, // Importing DISHES constant and assigning to dishes
        };
    };


    render() {

        // One way of defining components to use in Routers
        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }

};

export default Main;
