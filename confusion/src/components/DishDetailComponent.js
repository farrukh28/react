import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function DishDetail(props) {

    function renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>);
    };

    function renderComments(dishComments) {
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

    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {renderDish(props.dish)}
                    {renderComments(props.comments)}
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
};

export default DishDetail;