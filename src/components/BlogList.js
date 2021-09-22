import { useQuery } from "@apollo/client";
import { EmojiFrown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ArticleCard from "./articleCard";
import React, { lazy, Suspense } from 'react';
import { useHistory } from 'react-router-dom'
import { BLOGS_URL } from '../constants/urls'
import { Button } from "react-bootstrap";

// import PreLoader from "./preLoader";
const PreLoader = lazy(() => import('./preLoader'))


const BlogList = ({ query }) => {

  let history = useHistory();

  const { data: latestPosts, isLoading, error } = useQuery(query) //using graphQL
  // console.log(latestPosts);

  const handleOlderPosts = () => {
    history.push(BLOGS_URL)
  }


  return (
    <div>
      {error && (
        <div>
          <p>
            Blog posts couldn't be loaded <EmojiFrown />
          </p>
          <p>({error.message})</p>
        </div>
      )}
      {isLoading && (
        <Suspense fallback={<div>Loading...</div>}>
          <PreLoader />
        </Suspense>
      )}
      {latestPosts && (
        <div>
          {latestPosts.posts.map((post) => (
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

          <div>
            <Button onClick={handleOlderPosts} id="fcf-button"
              className="fcf-btn">
              Older Posts
            </Button>
          </div>
        </div>
      )
      }
    </div>
  );
};

export default BlogList;
