import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';
import React from 'react'; 

const Footer = () => {
    return (
        <Row>
            <Col md={12}>
                <Navbar className="footer"
                    // fixed="bottom"
                    expand='lg' bg='' variant='dark'>
                    <Container fluid>

                        <div className="footerContent mt-4">
                                    <div className="socials">
                                        
                                        <li><a href=" https://twitter.com/emyvan1" target="_blank" rel="noopener noreferrer"> <Twitter size={24}/></a></li>
                                        <li><a href="https://www.linkedin.com/in/selim-vanlare-a34092109/" target="_blank" rel="noopener noreferrer"><Linkedin size={24}/></a></li>
                                        <li><Facebook size={24}/></li>
                                       
                                    </div>
                                    
                           <p>&copy; 2021 Selim Van Lare</p> 
                           <p>Built by <a href="https://www.isaacafrifa.com" target="_blank" rel="noopener noreferrer">
                                Yaw Afrifa</a></p>
                                                          
                        </div>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    );
}

export default Footer;