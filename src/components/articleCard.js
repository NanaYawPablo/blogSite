import { Col, Container, Row } from "react-bootstrap";

const ArticleCard = ({ title, date, tag, author, description, image }) => {
    return (
        <div className="postCardColumn">
            <div className="postCard">
                <div className="overlay">
                    <div className="cardContent">
                        <Container fluid>
                            <h1 className="cardTitle">{title} </h1>
                            <h5><span className="badge badge-pill badge-dark">{tag}</span></h5>
                            <Row>
                                <Col md={{ span: 12 }}>
                                    <span className="articleInfo">
                                        {author} || {date}
                                    </span>
                                </Col>
                            </Row>
                            <p className="articleDesc">
                                {description.length > 150 ? description.substring(0, 150) + '...' : description}
                            </p>
                        </Container>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default ArticleCard;