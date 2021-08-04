import ParticlesBg from 'particles-bg'
import { Container, Button } from 'react-bootstrap'
import SubscriptionForm from '../components/subscriptionform'
import ScrollToTop from '../components/scrollToTop'
import BlogList from '../components/BlogList'
import CategoryList from '../components/categoryList'
import { Link, useHistory } from 'react-router-dom'
import { BLOGS_URL } from '../constants/urls'
// import { gql } from '@apollo/client' //cos calling from external queries file
import { ALL_CATEGORIES, LATEST_POSTS } from '../constants/queries'



const Home = () => {
  let history = useHistory();

const handleOlderPosts=()=>{
  history.push(BLOGS_URL)
}

  return (
    <div id="home">
      <ParticlesBg color="#e5c100" num={200} type="cobweb" bg={true} />

      <div className="header">
        <h1>Selim's Blog</h1>
        <p>Want to get notified of new posts?</p>
        <SubscriptionForm />
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
        <Container fluid>

          <div className="allPostsRow">
            <BlogList query={LATEST_POSTS} />
          </div>

        </Container>

        <div>
          {/* <Link to={BLOGS_URL}> */}
            <Button onClick={handleOlderPosts} id="fcf-button"
              className="fcf-btn">
              {/* {isLoading ? 'Loading…' : 'Older Posts'} */}
              Older Posts
            </Button>
          {/* </Link> */}
        </div>
      </section>

    </div>
  );
}

export default Home;