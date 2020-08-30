import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard(props) {

    var desig = () => {
        if (props.item.designation != null) {
            return (
                <CardSubtitle className="font-weight-bold text-success">{props.item.designation}</CardSubtitle>
            );
        }
        else {
            return (null);
        }
    } /* Returns Desgination if Designation available otherwise return null */

    if (props.isLoading) {
        return (
            <Loading />
        )
    }
    else if (props.errMess) {
        return (
            <h4>{props.errMess}</h4>
        )
    }
    else {
        return (
            <>

                <Card>
                    <CardImg src={props.item.image} alt={props.item.name} />
                    <CardBody>
                        <CardTitle className="font-weight-bolder">{props.item.name}</CardTitle>
                        {desig()} {/* Executes function */}
                        <CardText>{props.item.description}</CardText>
                    </CardBody>
                </Card>

            </>
        );
    }
};



function Home(props) {

    return (
        <>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish} isLoading={props.dishesLoading}
                            errMess={props.dishesErrMess}
                        />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;