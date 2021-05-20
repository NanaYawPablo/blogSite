import ParticlesBg from 'particles-bg'

const Home = () => {
    return (
        <div id="home">
  <ParticlesBg color="#e5c100" num={50} type="cobweb" bg={true} />

            <div class="header">
                <h1>Selim's Blog</h1>
                <h2>Welcome</h2>

                <button>Subscribe</button>
                
            </div>

            <div class="content">
                <h1>Content</h1>
                <p>Some content blablabla, some content blablabla.</p>
            </div>
        
        </div>
    );
}

export default Home;