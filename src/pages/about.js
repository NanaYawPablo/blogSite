import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Avatar from '../assets/images/selim1.jpeg'

const About = () => {
    return (
        <div id="about">

            <div className="aboutCard">
                <Row>
                    <Col md={6} className="avatarBlock">
                        {/* <Tilt
                  className="tilt-img" tiltMaxAngleX={35}
                  tiltMaxAngleY={35} perspective={900}
                  scale={0.9}
                  transitionSpeed={2000}
                  gyroscope={true}> */}

                        <div>
                            <img src={Avatar}
                                className="img-fluid avatar" alt="avatar" loading="lazy" />
                        </div>

                        {/* </Tilt> */}
                    </Col>

                    <Col md={6} className="aboutDetailsBlock">
                        <div className="aboutDetails">
                            <h1>About Me</h1>
                            <p>Voluptate veniam qui laboris et dolor ex commodo ullamco sit. Mollit laborum ipsum do proident ea. Fugiat dolore et sit elit nisi qui qui adipisicing eiusmod excepteur nostrud velit laboris magna. Nulla duis excepteur enim excepteur dolore in. Esse dolor do deserunt nisi nisi duis tempor dolor qui exercitation eu quis qui. Incididunt labore qui laboris adipisicing. Enim ut amet sunt ea cillum laborum aute eiusmod.</p>
                            <p>Aliqua aliqua elit consequat cillum reprehenderit adipisicing irure id dolor. Aliqua commodo in ex ex. Ad deserunt eu in enim.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default About;