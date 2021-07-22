import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BlogList from "../components/BlogList";
import { samplePosts } from "../constants/samplePosts";

const Category = () => {

    const { id } = useParams()

    return (
        <section id="about">
            <div id="template">
               
                    <div className="templateHeader">
                        <h1>Category</h1>
                        <h1 className="title">Category Name - id: {id}</h1>
                        <p>No of Posts</p>
                    </div>
                    <Container fluid>
                    <div className="allPostsRow">
                        <BlogList samplePosts={samplePosts} />
                    </div>

                </Container>
            </div>
        </section>
    );
}

export default Category;