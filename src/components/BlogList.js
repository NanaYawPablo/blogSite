import { useQuery } from "@apollo/client";
import { EmojiFrown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ArticleCard from "./articleCard";
import PreLoader from "./preLoader";
import React from 'react';
import { useHistory } from 'react-router-dom'
import { BLOGS_URL } from '../constants/urls'
import { Button } from "react-bootstrap";


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
          <h5>
            Blog posts couldn't be loaded <EmojiFrown />
          </h5>
          <p>({error.message})</p>
          <br />
        </div>
      )}
      {isLoading && <PreLoader />}
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
