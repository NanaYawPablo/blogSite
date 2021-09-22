import { // gql, 
    useQuery
} from "@apollo/client";
import moment from "moment";
import { Container, Row, Col } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { GET_SINGLE_POST } from "../constants/queries";
import { BACKEND_URL, PAGE404_URL } from "../constants/urls";
import MarkdownIt from "markdown-it";
import { Redirect } from "react-router-dom"
import React, { lazy, Suspense, useState } from 'react';
import LoadingPage from "../components/loadingPage";
import { FAKE_LOADING_TIME } from "../constants/constants";

// import PreLoader from "../components/preLoader";
// import RelatedPosts from "../components/relatedPosts";
const PreLoader = lazy(() => import('../components/preLoader'))
const RelatedPosts = lazy(() => import('../components/relatedPosts'))


const BlogDetails = () => {
    //fake loader
    const [isFakeLoading, setIsFakeLoading] = useState(true)

    //set isLoading off
    setTimeout(() => {
        setIsFakeLoading(false)
    }, FAKE_LOADING_TIME);


    const { slug } = useParams()
    const markDownIt = new MarkdownIt({})

    const { data, isLoading, error } = useQuery(GET_SINGLE_POST, {
        variables: {
            blogSlug: slug
        }
    })

    return (
        isFakeLoading ? (
            <LoadingPage />
        ) :
            (
                <div className="templateBody">

                    {error &&
                        <div style={{ margin: "2rem 0" }}>
                            <h4>Blog post couldn't be loaded <EmojiFrown /></h4>
                            <p>({error.message})</p>
                        </div>}

                    {isLoading && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PreLoader />
                        </Suspense>
                    )}

                    {data && (data.postBySlug) && (
                        <div>

                            <section className="detailsHeader" style={{ backgroundImage: `url(${BACKEND_URL}${data.postBySlug.image.url})` }}>
                                <h1>{data.postBySlug.title}</h1>
                                <p>{moment(new Date(data.postBySlug.published_at.toString())).format('MMMM Do YYYY')}</p>
                            </section>

                            <section className="detailsContent">
                                <Container fluid>

                                    <Row>
                                        <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                                            <div id="blogDescription" dangerouslySetInnerHTML={{ __html: markDownIt.render(data.postBySlug.content) }}>
                                            </div>
                                        </Col>
                                    </Row>

                                    <p className="categoryTag">{data.postBySlug.categories.map(
                                        category =>
                                            <span key={category.id} className="badge badge-pill badge-light">#{category.name}</span>
                                    )}
                                    </p>

                                    {
                                        data.postBySlug.authors.map(
                                            author => (
                                                // <span key={author.id}>|<b> {author.name} </b>|</span>
                                                <div key={author.id} className="chip">
                                                    <img src={BACKEND_URL + "" + author.avatar.url} alt="Author" width="96" height="96" />
                                                    {author.name}
                                                </div>
                                            )
                                        )}


                                </Container>
                            </section>

                            {/* RELATED POSTS SECTION */}
                            {/* checking for no category post */}
                            {data.postBySlug.categories && (data.postBySlug.categories.length > 0) && (

                                <Suspense fallback={<div>Loading...</div>}>
                                    <RelatedPosts category={data.postBySlug.categories} blogId={data.postBySlug.id} />
                                </Suspense>
                            )}

                        </div>
                    )}

                    {/* Null check for data.postBySlug ie. dynamic blogPost url slug is invalid*/}
                    {data && (!data.postBySlug) && (
                        <Redirect to={PAGE404_URL} />
                    )
                    }

                </div>
            )
    );
}

export default BlogDetails;

