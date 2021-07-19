import { Button, Col, Container, Row } from "react-bootstrap";
import { Link45deg } from "react-bootstrap-icons";


const ArticleCard = ({ title, date, tag, author, description, image }) => {
    return (
        <div class="postCardColumn">
            <div className="postCard">
                <div className="overlay">
                    <div className="cardContent">
                        <h1 className="cardTitle">{title} </h1>
                        {/* <span className="articleInfo"> LIFESTYLE || AUTHOR || DATE </span> */}
                        <Container fluid>
                            <Row>
                                <Col md={{ span: 12 }}>
                                    <span className="articleInfo">
                                        {tag} || {author} || {date}
                                    </span>
                                </Col>
                            </Row>
                        </Container>
                        <p className="articleDesc">
                            {description}
                            A blade runner must pursue and try 
                            A blade runner must pursue and try 
                            A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.
                        </p>
                        <Button id="fcf-button" href="https://commons.erau.edu/jdfsl/vol15/iss1/2/" target="_blank" rel="noopener noreferrer">
                            <Link45deg /> Read More...</Button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ArticleCard;