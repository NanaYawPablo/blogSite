import { useQuery } from "@apollo/client";
import { Button, Container } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import ArticleCard from "../components/articleCard";
import PreLoader from "../components/preLoader";
import {
  CATEGORY_NAME,
  // GET_CATEGORY_DETAILS, 
  // GET_PAGINATED_CATEGORY_DETAILS, 
  PAGINATED_CATEGORYS_POSTS
} from "../constants/queries";
import React, { useState } from 'react';
import ScrollToTop from "../components/scrollToTop";
// import useFetch from "../hooks/useFetch";


const Category = () => {

  // eslint-disable-next-line no-unused-vars
  const [skip, setSkip] = useState(4);    /*  NB: Skip must always be same as Limit  */
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(4);
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const { id } = useParams();

  const { data, isLoading, error, fetchMore: fetchMoreNext } = useQuery(PAGINATED_CATEGORYS_POSTS, {
    variables: {
      categoryID: id,
      limit: limit
    }
  });

  // const { data, isLoading, error } = useFetch(BACKEND_CATEGORIES_URL + "/" + id); //disabled rest call. Using GraphQL now

  const loadMorePosts = async () => {
    setIsLoadingMore(true);
    //  setSkip(skip + limit);
    setLimit(skip + limit)
    //delay fetch and IsLoadingMore by 0.5s
    setTimeout(() => {
      fetchMoreNext({
        variables: {
          categoryID: id,
          limit: limit
        },
        // updateQuery
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return Object.assign({}, prev, {
            data: fetchMoreResult,
          });
        },
      })
        //catch FetchMore Error
        .catch(error => {
          console.log("Fetch More Error: " + error);
        })
      setIsLoadingMore(false)
    }, 500);

  };


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

      {data && (
        <div id="template">
          <div className="templateHeader">
            <h1>Category</h1>
            <h1 className="title">{id}</h1>
            <div className="line"></div>
            {data.postsConnection.aggregate.count === 1 ? (
              <p>{data.postsConnection.aggregate.count} post</p>
            ) : (
              <p>{data.postsConnection.aggregate.count} posts</p>
            )}
          </div>
        </div>
      )}


        {/* Scroll Button */}
        <ScrollToTop />


      <Container fluid>
        <div className="allPostsRow">
          {data &&
            data.postsConnection.values.map((post) => (
              <div className="postPreview" key={post.id}>
                <Link to={`/blogs/${post.id}`}>
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
      </Container>

      {data && (data.postsConnection.values.length < data.postsConnection.aggregate.count) &&

        <Button
          onClick={loadMorePosts}
          id="fcf-button"
          style={{ marginBottom: "2rem" }}
          className="fcf-btn">
          {isLoadingMore ? "Loading…" : "Load More"}
        </Button>

      }

    </section>
  );
};

export default Category;
