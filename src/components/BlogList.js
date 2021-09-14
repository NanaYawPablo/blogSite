import { useQuery } from "@apollo/client";
import { EmojiFrown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ArticleCard from "./articleCard";
import PreLoader from "./preLoader";
import React from 'react';


const BlogList = ({ query }) => {
  const { data: latestPosts, isLoading, error } = useQuery(query) //using graphQL
  // console.log(latestPosts);

  return (
    <div>
      {error && (
        <div>
          <h5>
            Blog posts couldn't be loaded <EmojiFrown />
          </h5>
          <p>({error.message})</p>
          <br />
        </div>
      )}
      {isLoading && <PreLoader />}
      {latestPosts &&
        latestPosts.posts.map((post) => (
          <div className="postPreview" key={post.id}>
            <div className="postCardColumn">
              <Link to={`/blogs/${post.slug}`}>
                <ArticleCard
                  title={post.title}
                  date={post.published_at}
                  tags={post.categories}
                  description={post.description}
                  image={post.image}
                />
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
