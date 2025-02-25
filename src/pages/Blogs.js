import { useQuery } from "@apollo/client";
import React, { lazy, Suspense } from 'react';
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ArticleCard from "../components/articleCard";
// import CategoryList from "../components/categoryList";
// import PreLoader from "../components/preLoader";
// import ScrollToTop from "../components/scrollToTop";
import { ALL_CATEGORIES, PAGINATED_POSTS } from "../constants/queries";

const ScrollToTop = lazy(() => import('../components/scrollToTop'))
const PreLoader = lazy(() => import('../components/preLoader'))
const CategoryList = lazy(() => import('../components/categoryList'))



const Blogs = () => {

  // eslint-disable-next-line no-unused-vars
  const [skip, setSkip] = useState(6);    /*  NB: Skip must always be same as Limit according to spec  */
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(6);
  // eslint-disable-next-line no-unused-vars
  const [start, setStart] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const { data, isLoading, error, fetchMore: fetchMoreNext } = useQuery(PAGINATED_POSTS, {
    variables: {
      limit: limit,
      // start: start
    }
  })

  const loadMore = async () => {
    setIsLoadingMore(true);
    //  setSkip(skip + limit);
    setLimit(skip + limit)
    //delay fetch and IsLoadingMore by 0.5s
    setTimeout(() => {
      fetchMoreNext({
        variables: {
          limit: limit,
          // start: skip,
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

  // const updateQuery =(prevResult, { fetchMoreResult }) => {
  //   if (!fetchMoreResult) {
  //     return prevResult;
  //   }
  //   const previous = prevResult.postsConnection.values;
  //   const fetchMore = fetchMoreResult.postsConnection.values;

  //   fetchMoreResult.postsConnection.values = [...previous, ...fetchMore]; //It combines the previous result with the new one
  //   // console.log(fetchMoreResult.postsConnection.values);        
  //   return { ...fetchMoreResult }
  // }


  return (
    <section className="templateBody">
      <div id="template">

        <div className="templateHeader">
          <h1 className="title">Blog Posts</h1>
          <div className="line"></div>
          <div className="categoryBlock">
            <p>Filter blogs by category:</p>
            <Suspense fallback={<div>Loading...</div>}>
            <CategoryList query={ALL_CATEGORIES} />
            </Suspense>

            {/* TOTAL NUMBER OF ALL POSTS */}
            {data &&
              (data.postsConnection.aggregate.totalCount === 1 ? (
                <p>{data.postsConnection.aggregate.totalCount} post</p>
              ) : (
                <p>{data.postsConnection.aggregate.totalCount} posts</p>
              ))}
          </div>

        </div>


        {/* Scroll Button */}
        <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        </Suspense>


        <div className="blogPostsBlock">

          <Container fluid>
            <div className="allPostsRow">
              <div>
                {error && (
                  <div>
                    <h4>
                      Blog posts couldn't be loaded <EmojiFrown />
                    </h4>
                    <p>({error.message})</p>
                    <br />
                  </div>
                )}
                {isLoading && (
                   <Suspense fallback={<div>Loading...</div>}>
                <PreLoader />
                </Suspense>
                )}
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
            </div>
          </Container>

          {data && (data.postsConnection.values.length < data.postsConnection.aggregate.totalCount) &&

            <Button
              onClick={loadMore}
              id="fcf-button"
              style={{ marginBottom: "2rem" }}
              className="fcf-btn">
              {isLoadingMore ? "Loading…" : "Load More"}
            </Button>
          }

        </div>

      </div>
    </section>
  );
};

export default Blogs;
