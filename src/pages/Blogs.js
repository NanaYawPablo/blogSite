import { Container } from "react-bootstrap";
import BlogList from "../components/BlogList";
import { BACKEND_POSTS_URL } from "../constants/urls";

const Blogs = () => {
  return (
    <section id="about">
      <div id="template">
        <div className="templateHeader">
          <h1 className="title">Blog Posts</h1>
          {/* <p>No of Posts</p> */}

        </div>
        <Container fluid>
          <div className="allPostsRow">
            <BlogList url={BACKEND_POSTS_URL} />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Blogs;
