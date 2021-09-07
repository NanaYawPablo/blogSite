import { // gql, 
    useQuery
} from "@apollo/client";
import moment from "moment";
import { Container, Row, Col } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import PreLoader from "../components/preLoader";
import { GET_SINGLE_POST } from "../constants/queries";
import { BACKEND_URL, PAGE404_URL } from "../constants/urls";
import MarkdownIt from "markdown-it";
import { Redirect } from "react-router-dom"
import React from 'react';


const BlogDetails = () => {
    const { slug } = useParams()
    const markDownIt = new MarkdownIt({})

    const { data, isLoading, error } = useQuery(GET_SINGLE_POST, {
        variables: {
            blogSlug: slug
        }
    })

    return (
        <div id="about">

            {error &&
                <div style={{ margin: "2rem 0" }}>
                    <h4>Blog post couldn't be loaded <EmojiFrown /></h4>
                    <p>({error.message})</p>
                </div>}

            {isLoading && (<PreLoader />)}

            {data && (data.postBySlug) && (
                <div>

                    <section className="detailsHeader" style={{ backgroundImage: `url(${BACKEND_URL}${data.postBySlug.image.url})` }}>
                        <h1>{data.postBySlug.title}</h1>
                    </section>

                    <section className="detailsContent">
                        <Container fluid>
                            <p>{moment(new Date(data.postBySlug.published_at.toString())).format('MMMM Do YYYY')}</p>
                            <p id="author">By: {
                                data.postBySlug.authors.map(
                                    author => (
                                        <span key={author.id} style={{ textTransform: "capitalize" }}>|<b> {author.name} </b>|</span>
                                    )
                                )}
                            </p>
                            <Row>
                                <Col md={{ span: 8, offset: 2 }}>
                                    <div id="blogDesc" dangerouslySetInnerHTML={{ __html: markDownIt.render(data.postBySlug.content) }}>
                                    </div>
                                </Col>
                            </Row>

                            <h4>{data.postBySlug.categories.map(
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

            {/* Null check for data.postBySlug ie. dynamic url slug is invalid*/}
            {data && (!data.postBySlug) && (
                <Redirect to={PAGE404_URL} />
            )
            }

        </div>
    );
}

export default BlogDetails;

