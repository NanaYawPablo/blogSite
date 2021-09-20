import React from 'react';
import { Container } from 'react-bootstrap'
// import SubscriptionForm from '../components/subscriptionform'
import ScrollToTop from '../components/scrollToTop'
import BlogList from '../components/BlogList'
import CategoryList from '../components/categoryList'
// import { gql } from '@apollo/client' //cos calling from external queries file
import { ALL_CATEGORIES, LATEST_POSTS } from '../constants/queries'
import ReactTypingEffect from 'react-typing-effect';



const Home = () => {
  
  return (
    <div id="home">

      <div className="header">
        {/* <h1 className="bounceIn">Selim</h1> */}
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
      <ScrollToTop />

      <section id="categories">
        <div className="line"></div>
        <p>Categories</p>
        <div className="line"></div>
        <CategoryList query={ALL_CATEGORIES} />
      </section>


      <section className="content">
        <div className="line"></div>
        <p>Latest Posts</p>
        <div className="line"></div>
        <Container fluid>

          <div className="allPostsRow">
            <BlogList query={LATEST_POSTS} />
          </div>

        </Container>
      </section>

    </div>
  );
}

export default Home;