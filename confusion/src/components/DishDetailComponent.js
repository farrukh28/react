import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            propDish: this.props.dish,
        };
    }

    renderDish(dish) {
        return (<div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top width="100%" src={this.state.propDish.image} alt={this.state.propDish.name} />
                <CardBody>
                    <CardTitle>{this.state.propDish.name}</CardTitle>
                    <CardText>{this.state.propDish.description}</CardText>
                </CardBody>
            </Card>
        </div>);
    };

    renderComments(dishComments) {
        if (dishComments != null) {
            const comm = dishComments.map((dish) => {
                return (
                    <ListGroup>
                        <ListGroupItem>{dish.comment}<div>{"-- " + dish.author + ", " + dish.date}</div></ListGroupItem>
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
        return (
            <div className="row">
                {this.renderDish(this.state.propDish)}
                {this.renderComments(this.state.propDish.comments)}
            </div>
        );
    }
};


export default DishDetail;