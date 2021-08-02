import { Container } from "react-bootstrap";
import BlogList from "../components/BlogList";

//GraphQL import
import { gql } from '@apollo/client'

const ALL_POSTS = gql`
# Getting all posts and sorting by id desc
query GetAllPosts{
  posts(sort:"id:desc" ){
    id
    title
    description
    published_at
    image{
    		url
    }
    authors{
      name
			avatar{
				  url
      }
    }
    categories{
	    id
      name
    }
  }
}

`

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
            <BlogList query={ALL_POSTS} />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Blogs;
