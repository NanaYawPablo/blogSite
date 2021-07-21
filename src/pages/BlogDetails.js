import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id, title } = useParams()
    const backgroundImage = 'https://bitbucket.org/mrBlo/weather-app/raw/f7a716eb0a9c9f8b37eb67f4c14a26d466ac21e2/src/assets/images/day.jpeg'

    return (
        <div id="about">
            <div className="detailsHeader" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1>Title : {title}</h1>
                <p>ID : {id}</p>
            </div>

            <section className="detailsContent">

                <Container fluid>
                    <Row>
                        <Col md>
                            <p id="author">Author: Selim Van Lare</p>
                        </Col>
                        <Col md>
                            <p>Date: 25TH JULY 2098</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <p id="blogDesc">Enim ea fugiat minim labore occaecat nisi laborum ut cillum labore laborum voluptate esse.
                                Proident amet ad veniam ad non fugiat qui nulla nulla est consequat aliquip. Sint consequat laboris pariatur minim eu quis.
                                Ad aliquip irure ipsum cillum officia exercitation nisi et tempor dolor eu est tempor. Et proident irure laborum occaecat est
                                ad in veniam enim dolore cillum labore. Incididunt nulla elit incididunt nulla ipsum irure adipisicing et consectetur excepteur excepteur. Nulla ut irure officia ea duis reprehenderit nostrud duis.</p>
                        </Col>
                    </Row>

                    <h4><span style={{ margin: "5px" }} className="badge badge-pill badge-secondary">Category 1</span>
                        <span style={{ margin: "5px" }} className="badge badge-pill badge-secondary">Category 2</span>
                    </h4>

                </Container>

            </section>

        </div>
    );
}

export default BlogDetails;

