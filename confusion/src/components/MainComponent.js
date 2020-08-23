import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent'; // importing Header
import Footer from './FooterComponent'; // importing Footer
import Contact from './ContactComponent'; // importing contact
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes'; // Importing shared Dishes file
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Route, Switch, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {

        super(props);
        this.state = {
            dishes: DISHES, // Importing DISHES constant and assigning to dishes
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
        };
    };


    render() {

        // One way of defining components to use in Routers
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch> {/*React Router*/}
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/contactus" component={() => <Contact />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }

};

export default Main;
