import ParticlesBg from 'particles-bg'
import { Container, Button } from 'react-bootstrap'
import SubscriptionForm from '../components/subscriptionform'
import ScrollToTop from '../components/scrollToTop'
import BlogList from '../components/BlogList'
import { samplePosts } from "../constants/samplePosts";

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

            <section className="content">
                {/* <h1>Content</h1>
                <p>Some content blablabla</p> */}

                <Container fluid>

                    <div class="allPostsRow">
                        <BlogList samplePosts={samplePosts} />
                    </div>

                </Container>

                <div>
                    <Button type="submit" id="fcf-button"
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