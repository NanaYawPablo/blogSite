import { useQuery } from "@apollo/client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Image from '../assets/images/404image.jpeg'
import { GET_RELATED_POSTS } from "../constants/queries";
// import moment from "moment";
import { Link } from "react-router-dom";

const RelatedPosts = ({ category, blogId }) => {

    //catch null category or blogID prop
    if (!category || !blogId) {
        return (
            (<p>No related posts</p>)
        )
    }

    const { data: relatedPosts, isLoading: isRelatedPostsLoading, error: relatedPostsError } = useQuery(GET_RELATED_POSTS, {
        variables: {
            categorySlug: category[0].slug, //using first index of category for now
            blogID: blogId
        }
    })
    // console.log(relatedPosts);

    return (
        <div>
            {relatedPostsError &&
                <div style={{ margin: "2rem 0" }}>
                    <h6>Related posts couldn't be loaded</h6>
                    <p>({relatedPostsError.message})</p>
                </div>}

            {isRelatedPostsLoading && (<h6>Loading related posts</h6>)}

            {/* null category prop already sorted so catch null data:relatedPosts */}
            {relatedPosts && (relatedPosts.categoryBySlug) && (
                //  Checking for categories with only one post. The passed-on post is excluded as per your graphQL query hence there will no posts to be displayed (ie. posts.length = 0). 
                (relatedPosts.categoryBySlug.posts.length > 0 ? (

                    <section className="relatedPosts">
                        <Container fluid>
                            <Row>
                                <Col md={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
                                    <p>Check out these related blog posts</p>
                                    {/* {console.log(relatedPosts.categoryBySlug)} */}

                                    <div className="flex-container">
                                        {relatedPosts.categoryBySlug.posts.map(
                                            post =>
                                                <div key={post.id} className="card">
                                                    {/* {post.slug} */}
                                                    {/* <img className="card-img-top" src={Image} alt="Related post avatar" /> */}
                                                    <div className="card-body">
                                                        <h5 className="card-title text-left">{post.title}</h5>
                                                        <p className="card-text text-left">{post.description}</p>
                                                        {/* <small className="text-muted text-right">Posted {moment(post.published_at).fromNow()}</small> */}
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link to={`/blogs/${post.slug}`}> <button className="btn btn-dark">View Post</button> </Link>
                                                    </div>
                                                </div>
                                        )}
                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    </section>
                ) :
                    (
                        <p className="text-muted">No related posts associated with this post</p>
                    )
                )
            )}

        </div>
    );
}

export default RelatedPosts;