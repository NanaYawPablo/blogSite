import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/navbar'
import Footer from "./components/footer"
import Home from './pages/home'
import { ABOUT_URL,BLOGS_URL, BLOG_URL, CATEGORY_URL } from './constants/urls'
import About from "./pages/about"
import Page404 from "./pages/page404"
import BlogDetails  from "./pages/BlogDetails"
import Category from "./pages/Category"
import Blogs from "./pages/Blogs"


function App() {
  return (
    <Router>

      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path={ABOUT_URL} component={About} />
        <Route exact path={CATEGORY_URL} component={Category} />
        <Route exact path={BLOGS_URL} component={Blogs} />
        <Route exact path={BLOG_URL} component={BlogDetails} />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
