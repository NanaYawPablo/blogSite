import { Col, Container, Row } from "react-bootstrap";

const ArticleCard = ({ title, date, tags, description, image }) => {
  return (
    <div className="postCardColumn">
      <div className="postCard">
        <div className="overlay">
          <div className="cardContent">
            <Container fluid>
              <h1 className="cardTitle">{title} </h1>
              <h5>
                {tags &&
                  tags.map((category) => (
                    <span
                      style={{ margin: "5px", textTransform: "capitalize" }}
                      className="badge badge-pill badge-dark"
                    >
                      {category.name}
                    </span>
                  ))}
              </h5>
              <Row>
                <Col md={{ span: 12 }}>
                  <span className="articleInfo">{date}</span>
                </Col>
              </Row>
              <p className="articleDesc">
                {description.length > 150
                  ? description.substring(0, 150) + "..."
                  : description}
              </p>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
