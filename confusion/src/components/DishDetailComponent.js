import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';



const required = (value) => value && value.length;
const maxLength = (len) => (value) => !(value) || (value.length <= len);
const minLength = (len) => (value) => (value) && (value.length >= len);



class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };

    handleCommentSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    };


    render() {
        return (
            <>
                <div className="col-12 mt-3">
                    <Button onClick={this.toggleModal} className="submit-btn"><i className="fa fa-pencil"></i> Submit Comment</Button>
                </div>
                <div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader className="font-weight-bold" toggle={this.toggleModal}> Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)}>
                                <Row className="form-group">
                                    <Label md={12} htmlFor="rating">Rating</Label>
                                    <Col md={12}><Control.select model=".rating" id="rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label md={12} htmlFor="author">Your Name</Label>
                                    <Col md={12}>
                                        <Control.text model=".author" className="form-control" id="author"
                                            name="author" placeholder="Your Name" validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }} />
                                        <Errors className="text-danger" model=".author" show="touched"
                                            messages={{
                                                required: "Required. ",
                                                minLength: "Must be greater than 2 characters",
                                                maxLength: "Must be 15 characters or less"
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label md={12} htmlFor="comment">Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea model=".comment" rows="6" id="comment" name="comment" className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={12}>
                                        <Button type="submit" color="primary">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </>
        );
    };
};




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

    function renderComments(dishComments, addComment, dishId) {
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
                    {/* Comment Form */}
                    {<CommentForm dishId={dishId} addComment={addComment} />}
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
                        <h3 className="page-name">{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {renderDish(props.dish)}
                    {renderComments(props.comments, props.addComment, props.dish.id)}
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