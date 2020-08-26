import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent'; // importing Header
import Footer from './FooterComponent'; // importing Footer
import Contact from './ContactComponent'; // importing contact
import About from './AboutComponent'; // importing about
import DishDetail from './DishDetailComponent';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



class Main extends Component {


    render() {

        // One way of defining components to use in Routers
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithID = (props) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(props.match.params.dishid, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(props.match.params.dishid, 10))} />
            );
        }

        return (
            <div>
                <Header />
                <Switch> {/*React Router*/}
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishid" component={DishWithID} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                    <Route path="/contactus" component={() => <Contact />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    };
};


export default withRouter(connect(mapStateToProps)(Main));
