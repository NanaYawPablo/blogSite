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

                            <img src={Avatar}
                            width="640" height="360"
                                className="img-fluid avatar" alt="avatar" loading="lazy" />
                       

                        {/* </Tilt> */}
                    </Col>

                    <Col md={6} className="aboutDetailsBlock">
                        <div className="aboutDetails">
                            <h1>About Me</h1>
                            <p>This is the part where I am supposed to impress you with accolades. Two things I love : Jesus and Food. </p>
                            <p>We've all heard of this clichéd question, "What keeps you up at night?". Well, mine is the stories in my head so I decided to share them with you. Enjoy the read!</p>
                        <p>XOXO</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default About;