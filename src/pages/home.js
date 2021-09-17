import React from 'react';
import { Container, Button } from 'react-bootstrap'
// import SubscriptionForm from '../components/subscriptionform'
import ScrollToTop from '../components/scrollToTop'
import BlogList from '../components/BlogList'
import CategoryList from '../components/categoryList'
import { useHistory } from 'react-router-dom'
import { BLOGS_URL } from '../constants/urls'
// import { gql } from '@apollo/client' //cos calling from external queries file
import { ALL_CATEGORIES, LATEST_POSTS } from '../constants/queries'
import ReactTypingEffect from 'react-typing-effect';



const Home = () => {
  let history = useHistory();

  const handleOlderPosts = () => {
    history.push(BLOGS_URL)
  }

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
            cursor={"😎"}
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

        <div>
          <Button onClick={handleOlderPosts} id="fcf-button"
            className="fcf-btn">
            {/* {isLoading ? 'Loading…' : 'Older Posts'} */}
            Older Posts
          </Button>
        </div>
      </section>

    </div>
  );
}

export default Home;