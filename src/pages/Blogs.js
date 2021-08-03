import { Container } from "react-bootstrap";
import BlogList from "../components/BlogList";
//GraphQL import
import { gql } from '@apollo/client'
import CategoryList from "../components/categoryList";


const ALL_CATEGORIES = gql`
  # Getting all categories and sorting by name asc
  query GetAllCategories {
    categories(sort: "name:asc") {
      id
      name
    }
  }
`;

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
          <div class="line"></div>
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
