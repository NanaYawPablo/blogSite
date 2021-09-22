import React, { lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap'
// import SubscriptionForm from '../components/subscriptionform'
// import { gql } from '@apollo/client' //commented out cos I'm calling from external queries file
import { ALL_CATEGORIES, LATEST_POSTS } from '../constants/queries'
import ReactTypingEffect from 'react-typing-effect';

// import BlogList from '../components/BlogList'
// import CategoryList from '../components/categoryList'
// import ScrollToTop from '../components/scrollToTop'
const CategoryList = lazy(() => import('../components/categoryList'))
const BlogList = lazy(() => import('../components/BlogList'))
const ScrollToTop = lazy(() => import('../components/scrollToTop'))


const Home = () => {

  return (
    <div id="home">

      <div className="header">
        <h1>Selim</h1>
        <h2>
          <ReactTypingEffect
            text={["Writer", "Polygot", "Babygirl"]}
            speed={200}
            typingDelay={1800}
            eraseDelay={1500}
            eraseSpeed={100}
          />
        </h2>

        {/* <p>Want to get notified of new posts?</p>
        <SubscriptionForm /> */}
      </div>

      {/* Scroll Button */}
      <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
      </Suspense>

      <section id="categories">
        <div className="line"></div>
        <p>Categories</p>
        <div className="line"></div>
        <Suspense fallback={<div>Loading...</div>}>
          <CategoryList query={ALL_CATEGORIES} />
        </Suspense>
      </section>


      <section className="content">
        <div className="line"></div>
        <p>Latest Posts</p>
        <div className="line"></div>
        <Container fluid>

          <div className="allPostsRow">
            <Suspense fallback={<div>Loading...</div>}>
              <BlogList query={LATEST_POSTS} />
            </Suspense>
          </div>

        </Container>
      </section>

    </div>
  );
}

export default Home;