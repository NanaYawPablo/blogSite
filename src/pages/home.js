import ParticlesBg from 'particles-bg'
import { Container, Button } from 'react-bootstrap'
import SubscriptionForm from '../components/subscriptionform'
import ScrollToTop from '../components/scrollToTop'
import BlogList from '../components/BlogList'
import { samplePosts } from "../constants/samplePosts";
import CategoryList from '../components/categoryList'
import { Link } from 'react-router-dom'
import {BLOGS_URL} from '../constants/urls'

const Home = () => {
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
            
            {/* All Categories Component */}
            <CategoryList />

            <section className="content">
                {/* <h1>Content</h1>
                <p>Some content blablabla</p> */}

                <Container fluid>
               
                    <div className="allPostsRow">
                        <BlogList samplePosts={samplePosts} />
                    </div>

                </Container>

                <div>
                    <Link to={BLOGS_URL}>
                    <Button type="submit" id="fcf-button"
                        className="fcf-btn">
                        {/* {isLoading ? 'Loading…' : 'Older Posts'} */}
                        Older Posts 
                    </Button>
                    </Link>
                </div>
            </section>

        </div>
    );
}

export default Home;