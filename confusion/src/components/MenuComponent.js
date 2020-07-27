import React, { Component } from 'react';
import DishDetail from './DishDetailComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class Menu extends Component {

    constructor(props) {

        super(props);
        this.state = {
            selectedDish: null
        };
        console.log("Menu Component constructor is invoked");
    };

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    componentDidMount() {
        console.log("Menu Component componentDidMount is invoked");
    };

    renderDish(dish) {
        if (dish != null) {
            return (
                <DishDetail dish={dish} />
            );
        }
        else {
            return (
                <div></div>
            );
        }
    };

    render() {              // instead of this.state we use this.prop
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log("Menu Component render is invoked");
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                {this.renderDish(this.state.selectedDish)} {/*for rendering DishDetails*/}
            </div>
        );
    };
}

export default Menu;