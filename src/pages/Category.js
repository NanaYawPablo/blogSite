import { Container } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import ArticleCard from "../components/articleCard";
import PreLoader from "../components/preLoader";
import { BACKEND_CATEGORIES_URL } from "../constants/urls";
import useFetch from "../hooks/useFetch";

const Category = () => {
  const { id } = useParams();
  const {
    data: categoryDetails,
    isLoading,
    error,
  } = useFetch(BACKEND_CATEGORIES_URL + "/" + id);

  return (
    <section id="about">
      {error && (
        <div style={{ margin: "2rem 0" }}>
          <h4>
            Blog posts couldn't be loaded <EmojiFrown />
          </h4>
          <p>({error})</p>
        </div>
      )}

      {isLoading && <PreLoader />}

      {categoryDetails && (
        <div id="template">
          <div className="templateHeader">
            <h1>Category</h1>
            <h1 className="title">{categoryDetails.name}</h1>
            {categoryDetails.posts.length === 1 ? (
              <p>{categoryDetails.posts.length} post</p>
            ) : (
              <p>{categoryDetails.posts.length} posts</p>
            )}
          </div>
          <Container fluid>
            {/* {JSON.stringify(categoryDetails)} */}
            <div className="allPostsRow">
              {categoryDetails.posts.map((post) => (
                <div className="postPreview" key={post.id}>
                  <Link to={`/blogs/${post.id}/${post.title}`}>
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
