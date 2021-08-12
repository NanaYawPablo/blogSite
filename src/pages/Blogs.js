import { Container } from "react-bootstrap";
import BlogList from "../components/BlogList";
import CategoryList from "../components/categoryList";
import { ALL_CATEGORIES, ALL_POSTS } from "../constants/queries";



const Blogs = () => {
  

  return (
    <section id="about">
      <div id="template">
        <div className="templateHeader">
          <h1 className="title">Blog Posts</h1>
          <div className="line"></div>
          <p>Filter blogs by category:</p>
          <CategoryList query={ALL_CATEGORIES} />
          {/* <p>No of Posts</p> */}

        </div>
        <Container fluid>
          <div className="allPostsRow">
          <BlogList query={ALL_POSTS} />  
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Blogs;
