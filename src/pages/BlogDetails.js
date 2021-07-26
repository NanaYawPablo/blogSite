import { Container, Row, Col } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import PreLoader from "../components/preLoader";
import { BACKEND_POSTS_URL, BACKEND_URL } from "../constants/urls";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    const { id, title } = useParams()
    const { data: post, isLoading, error } = useFetch(BACKEND_POSTS_URL + '/' + id)
    console.log(post);

    return (
        <div id="about">

            {error &&
                <div style={{ margin: "2rem 0" }}>
                    <h4>Blog post couldn't be loaded <EmojiFrown /></h4>
                    <p>({error})</p>
                </div>}

            {isLoading && (<PreLoader />)}

            {post && (
                <div>

                    <section className="detailsHeader" style={{ backgroundImage: `url(${BACKEND_URL}${post.image.url})` }}>
                        <h1>{post.title}</h1>
                    </section>

                    <section className="detailsContent">
                        <Container fluid>
                        <p>Pub Date: {post.published_at.toString()}</p>
                        <p id="author">By: {
                            post.authors.map(
                                author => (
                                    <span style={{ textTransform: "capitalize" }}>|<b> {author.name} </b>|</span>
                                )
                            )}
                        </p>
                            <Row>
                                <Col md={{ span: 8, offset: 2 }}>
                                    <p id="blogDesc">
                                        {post.content}
                                    </p>
                                </Col>
                            </Row>

                            <h4>{post.categories.map(
                                category =>
                                    <span style={{ margin: "5px", textTransform: "capitalize" }} className="badge badge-pill badge-secondary">{category.name}</span>
                            )}
                            </h4>

                            {/* <h4><span style={{ margin: "5px" }} className="badge badge-pill badge-secondary">Category 1</span>
                                <span style={{ margin: "5px" }} className="badge badge-pill badge-secondary">Category 2</span>
                            </h4> */}
                        </Container>
                    </section>

                </div>
            )}

        </div>
    );
}

export default BlogDetails;

