import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function Menu(props) {  // Functional Component
    // instead of this.state we use props.Variable

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Link className="link" to={`/menu/${dish.id}`}>  {/* Sending parameters through Route URL */}
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Link>
            </div>
        );
    });

    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3 className="page-name">Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;