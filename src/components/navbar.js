import { Navbar, Nav, Container } from 'react-bootstrap';
import { withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import React from 'react'; 

const Navigation = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <Navbar className="navbar"
                    collapseOnSelect
                    // fixed="top"
                     sticky="top" 
                    expand='lg' bg='' variant='dark'>
                    <Container fluid>
                        {/* <LinkContainer exact to="/">
                            <Navbar.Brand className="font-weight-bold text-muted">
                                Home
                            </Navbar.Brand>
                        </LinkContainer> */}
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className="ml-auto" activeKey={window.location.pathname}>

                                <LinkContainer exact to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>

                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default withRouter(Navigation);