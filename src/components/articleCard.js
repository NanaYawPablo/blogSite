import moment from "moment";
import { Col, Container, Row } from "react-bootstrap";
import { BACKEND_URL } from "../constants/urls";
import React from 'react'; 

const ArticleCard = ({ title, date, tags, description, image }) => {
  return (
    
      <div className="postCard" style={{ backgroundImage: `url(${BACKEND_URL}${image.url})` }}>
        <div className="overlay">
          <div className="cardContent">
            <Container fluid>
              <h1 className="cardTitle">{title} </h1>
              <h5>
                {tags &&
                  tags.map((category) => (
                    <span key={category.id}
                      style={{ margin: "5px", textTransform: "capitalize" }}
                      className="badge badge-pill badge-dark">
                      {category.name}
                    </span>
                  ))}
              </h5>
              <Row>
                <Col md={{ span: 12 }}>
                  <span className="articleInfo">{moment(new Date(date)).format('MMMM Do YYYY')}</span>
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
   
  );
};

export default ArticleCard;
