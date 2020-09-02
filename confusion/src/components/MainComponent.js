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
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    };

    render() {

        // One way of defining components to use in Routers
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promosLoading={this.props.promotions.isLoading}
                    promossErrMess={this.props.promotions.errMess}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess}
                />
            );
        };

        const DishWithID = (props) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(props.match.params.dishid, 10))[0]}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(props.match.params.dishid, 10))}
                    postComment={this.props.postComment}
                    isLoading={this.props.dishes.isLoading}
                    ErrMess={this.props.dishes.errMess}
                    commentsErrMess={this.props.comments.errMess}
                />
            );
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch> {/*React Router*/}
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                            <Route path="/menu/:dishid" component={DishWithID} />
                            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                            <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return ({
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        resetFeedbackForm: () => dispatch(actions.reset('feedback')),
        fetchComments: () => dispatch(fetchComments()),
        fetchPromos: () => dispatch(fetchPromos()),
        fetchLeaders: () => dispatch(fetchLeaders()),
        postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) =>
            dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))
    });
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
