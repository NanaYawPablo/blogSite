import { gql, useQuery } from "@apollo/client";
import { Container, Row, Col } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import PreLoader from "../components/preLoader";
import { BACKEND_URL } from "../constants/urls";



const GET_SINGLE_POST = gql` 
# Getting single post
query GetSinglePost($blogID: ID!){ #for other variable types=> $variableName: String! , $variableName: Int! etc.
  post(id: $blogID) {
    id
    title
    description
    content
    published_at
    image {
      url
    }
    authors {
      id
      name
      avatar {
        url
      }
    }
    categories {
      id
      name
    }
  }
}
`;

const BlogDetails = () => {
    const { id, title } = useParams()

    const { data, isLoading, error } = useQuery(GET_SINGLE_POST, {
        variables: {
            blogID: id
        }
    })
    // console.log(data);

    return (
        <div id="about">

            {error &&
                <div style={{ margin: "2rem 0" }}>
                    <h4>Blog post couldn't be loaded <EmojiFrown /></h4>
                    <p>({error.message})</p>
                </div>}

            {isLoading && (<PreLoader />)}

            {data && (
                <div>

                    <section className="detailsHeader" style={{ backgroundImage: `url(${BACKEND_URL}${data.post.image.url})` }}>
                        <h1>{data.post.title}</h1>
                    </section>

                    <section className="detailsContent">
                        <Container fluid>
                            <p>Pub Date: {data.post.published_at.toString()}</p>
                            <p id="author">By: {
                                data.post.authors.map(
                                    author => (
                                        <span key={author.id} style={{ textTransform: "capitalize" }}>|<b> {author.name} </b>|</span>
                                    )
                                )}
                            </p>
                            <Row>
                                <Col md={{ span: 8, offset: 2 }}>
                                    <div id="blogDesc">
                                        <ReactMarkdown>
                                            {data.post.content}
                                        </ReactMarkdown>
                                    </div>
                                </Col>
                            </Row>

                            <h4>{data.post.categories.map(
                                category =>
                                    <span key={category.id} style={{ margin: "5px", textTransform: "capitalize" }} className="badge badge-pill badge-secondary">{category.name}</span>
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

