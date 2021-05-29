import ParticlesBg from 'particles-bg'
import { Container, Row } from 'react-bootstrap'
import ArticleCard from '../components/articleCard'
import SubscriptionForm from '../components/subscriptionform'

const Home = () => {
    return (
        <div id="home">
            <ParticlesBg color="#e5c100" num={50} type="cobweb" bg={true} />

            <div className="header">
                <h1>Selim's Blog</h1>
                <h2>Welcome</h2>
                <p>Want to get notified of new posts?</p>
                <SubscriptionForm />
            </div>

            <section className="content">
                <h1>Content</h1>
                <p>Some content blablabla, some content blablabla.</p>

                <Container fluid>
                    <Row>
                        <div className="col-12 col-md-5 offset-md-1">
                            <ArticleCard />
                        </div>
                        <div className="col-12 col-md-5 offset-md-1">
                            <ArticleCard />
                        </div>
                    </Row>
                </Container>

            </section>

        </div>
    );
}

export default Home;