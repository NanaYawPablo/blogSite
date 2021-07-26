import { EmojiFrown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ArticleCard from "./articleCard";
import PreLoader from "./preLoader";
// import axios from "axios";

const BlogList = ({ url }) => {
  const { data: allPosts, isLoading, error } = useFetch(url);
  //  console.log(allPosts);

  return (
    <div>
      {error && (
        <div>
          <h4>
            Blog posts couldn't be loaded <EmojiFrown />
          </h4>
          <p>({error})</p>
          <br />
        </div>
      )}
      {isLoading && <PreLoader />}
      {allPosts &&
        allPosts.map((post) => (
          <div className="postPreview" key={post.id}>
            <Link to={`/blogs/${post.id}/${post.title}`}>
              <ArticleCard
                title={post.title}
                date={post.published_at}
                tags={post.categories}
                description={post.description}
                image={post.image}
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
