import { gql, useQuery } from "@apollo/client";
import { Container } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import ArticleCard from "../components/articleCard";
import PreLoader from "../components/preLoader";
// import useFetch from "../hooks/useFetch";

const GET_CATEGORY_DETAILS = gql`
# Getting selected category details and sorting posts by id desc

query GetCategoryDetails($categoryID : ID!){
  category(id:$categoryID) {
    id
    name
       posts(sort:"id:desc"){
           id
           title
           published_at
           description
           image{
                 url
                }
            }
  }
}
`;


const Category = () => {
  const { id } = useParams();
  
  const { data: categoryDetails, isLoading, error } = useQuery(GET_CATEGORY_DETAILS, {
    variables:{
      categoryID: id
    }
  });
// const { data: categoryDetails, isLoading, error } = useFetch(BACKEND_CATEGORIES_URL + "/" + id); //disabled rest call. Using GraphQL now

  return (
    <section id="about">
      {error && (
        <div style={{ margin: "2rem 0" }}>
          <h4>
            Blog posts couldn't be loaded <EmojiFrown />
          </h4>
          <p>({error.message})</p>
        </div>
      )}

      {isLoading && <PreLoader />}

      {categoryDetails && (
        <div id="template">
          <div className="templateHeader">
            <h1>Category</h1>
            <h1 className="title">{categoryDetails.category.name}</h1>
             <div class="line"></div>
             
            {categoryDetails.category.posts.length === 1 ? (
              <p>{categoryDetails.category.posts.length} post</p>
            ) : (
              <p>{categoryDetails.category.posts.length} posts</p>
            )}
          </div>
          <Container fluid>
            <div className="allPostsRow">
              {categoryDetails.category.posts.map((post) => (
                <div className="postPreview" key={post.id}>
                  <Link to={`/blogs/${post.id}`}>
                    <ArticleCard
                      title={post.title}
                      date={post.published_at}
                      // tags={post.categories}
                      description={post.description}
                      image={post.image}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </section>
  );
};

export default Category;
