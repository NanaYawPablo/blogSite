import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {

    const [imageLoaded, setImageLoaded] = useState(false)
    const showImage = () => {
        setImageLoaded(true)
    }
    
    return (
        <div id="about">

            <div className="aboutCard">
                <Row>
                    <Col md={6} className="avatarBlock">
                        <div className="img-container">
                            {/* PlaceHolder Image */}
                            <img src="https://ik.imagekit.io/afrifa/selim/tr:w-600,bl-30,q-50/selim-avatar.jpeg?updatedAt=1632519558741"
                                style={imageLoaded ? { display: "none" } : {}}
                                width="800" height="720"
                                className="img-fluid avatar" alt="avatar"
                            />
                            {/* Intended Image from ImageKit */}
                            <img src="https://ik.imagekit.io/afrifa/selim/tr:w-600/selim-avatar.jpeg?updatedAt=1632519558741"
                                onLoad={showImage}
                                style={imageLoaded ? {} : { display: "none" }}
                                srcSet="https://ik.imagekit.io/afrifa/selim/tr:w-400/selim-avatar.jpeg?updatedAt=1632519558741 400w,
                            https://ik.imagekit.io/afrifa/selim/tr:w-800/selim-avatar.jpeg?updatedAt=1632519558741 800w"
                                // https://ik.imagekit.io/afrifa/selim/tr:w-1200/selim-avatar.jpeg?updatedAt=1632519558741 1200w
                                width="800" height="720"
                                className="img-fluid avatar" alt="avatar"
                            />

                        </div>
                    </Col>

                    <Col md={6} className="aboutDetailsBlock">
                        <div className="aboutDetails">
                            <h1>About Me</h1>
                            <p>This is the part where I am supposed to impress you with accolades. Two things I love: Jesus and Food. </p>
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