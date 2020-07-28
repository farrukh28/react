import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';


class DishDetail extends Component {


    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>);
    };

    renderComments(dishComments) {
        if (dishComments != null) {
            const comm = dishComments.map((dish) => {
                return (
                    <ListGroup key={dish.id}>
                        <ListGroupItem>{dish.comment}<div>{"-- " + dish.author + ", " + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(dish.date)))}</div></ListGroupItem>
                    </ListGroup>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comm}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    };

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
};


export default DishDetail;