import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component {

    render() {

        return (
            // React-fragment short-form. Used for grouping of react-elements instead of using div.
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="#">Farrukh</NavbarBrand>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Farrukh Restaurant</h1>
                                <p>We take inspiration from the world's best cuisines, and create a unique fuison experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    };

};




export default Header;