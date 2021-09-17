import { useQuery } from "@apollo/client";
import { Button, Container } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import ArticleCard from "../components/articleCard";
import PreLoader from "../components/preLoader";
import {
  CATEGORY_NAME,
  PAGINATED_CATEGORYS_POSTS
} from "../constants/queries";
import React, { useState } from 'react';
import ScrollToTop from "../components/scrollToTop";
import { Redirect } from "react-router-dom"
import { PAGE404_URL } from "../constants/urls";
import { FAKE_LOADING_TIME } from "../constants/constants";
import LoadingPage from "../components/loadingPage";
// import useFetch from "../hooks/useFetch";


const Category = () => {
  //fake loader
  const [isFakeLoading, setIsFakeLoading] = useState(true)

  //set isLoading off
  setTimeout(() => {
      setIsFakeLoading(false)
  }, FAKE_LOADING_TIME);

  // eslint-disable-next-line no-unused-vars
  const [skip, setSkip] = useState(6);    /*  NB: Skip must always be same as Limit  */
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const { slug } = useParams();

  /* Category Name Call */
  const { data: categoryName, isLoading: isLoadingCategoryName, error: categoryNameError } = useQuery(CATEGORY_NAME, {
    variables: {
      categorySlug: slug
    }
  });

  /* Category Posts Call */
  const { data, isLoading, error, fetchMore: fetchMoreNext } = useQuery(PAGINATED_CATEGORYS_POSTS, {
    variables: {
      categorySlug: slug,
      limit: limit
    }
  });


  // const { data, isLoading, error } = useFetch(BACKEND_CATEGORIES_URL + "/" + id); //disabled rest call. Using GraphQL now

  const loadMorePosts = async () => {
    setIsLoadingMore(true);
    setLimit(skip + limit)
    //delay fetch and IsLoadingMore by 0.5s
    setTimeout(() => {
      fetchMoreNext({
        variables: {
          categorySlug: slug,
          limit: limit
        },
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
    isFakeLoading ? (
      <LoadingPage />
  ) :
      (
    <section className="templateBody">
      {error && (
        <div style={{ margin: "2rem 0" }}>
          <h4>
            Blog posts couldn't be loaded <EmojiFrown />
          </h4>
          <p>({error.message})</p>
        </div>
      )}

      {isLoading && <PreLoader />}


      <div id="template">
        <div className="templateHeader">
          <h1>Category</h1>

          {/* Category Name Call Implementation */}
          {categoryNameError && (
            <div style={{ margin: "2rem 0" }}>
              <h5>
                Category Name couldn't be loaded <EmojiFrown />
              </h5>
              <p>({error.message})</p>
            </div>
          )}

          {isLoadingCategoryName && (console.log('Loading Category Name'))}

          {categoryName && categoryName.categoryBySlug && (
            <h1 className="title">{categoryName.categoryBySlug.name}</h1>
          )}
          {/* Check for when the dynamic url categorySlug is invalid ie. categoryName.categoryBySlug will be null*/}
          {categoryName && !categoryName.categoryBySlug && (
            // <h1 className="title">Unkown Category</h1>
            <Redirect to={PAGE404_URL} />
          )}


          <div className="line"></div>
          <div className="categoryBlock">
          {data && (
            data.postsConnection.aggregate.count === 1 ? (
              <p>{data.postsConnection.aggregate.count} post</p>
            ) : (
              <p>{data.postsConnection.aggregate.count} posts</p>
            )
          )}
          </div>
        </div>
      </div>


      {/* Scroll Button */}
      <ScrollToTop />

      <div className="blogPostsBlock">
            <Container fluid>
              <div className="allPostsRow">
                {data &&
                  data.postsConnection.values.map((post) => (
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
        </div>

        </section>

      )
 );
};

export default Category;
