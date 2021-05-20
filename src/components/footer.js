import { Navbar, Nav, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <Navbar className="footer"
                    // fixed="bottom"
                    expand='lg' bg='' variant='dark'>
                    <Container fluid>
                        <Nav className="mr-auto">
                            <p>&copy; 2021 Isaac Afrifa</p>
                        </Nav>

                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default Footer;