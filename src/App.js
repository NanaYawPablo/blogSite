//React Router import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//Apollo Client import
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

//page & layout imports
import Navbar from './components/navbar'
import Footer from "./components/footer"
import Home from './pages/home'
import { ABOUT_URL, BLOGS_URL, BLOG_URL, CATEGORY_URL, GRAPHQL_SERVER_ENTRYPOINT } from './constants/urls'
import About from "./pages/about"
import Page404 from "./pages/page404"
import BlogDetails from "./pages/BlogDetails"
import Category from "./pages/Category"
import Blogs from "./pages/Blogs"
import React from 'react'; 

//Apollo client setup
const apolloClient = new ApolloClient({
  uri: GRAPHQL_SERVER_ENTRYPOINT,
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={apolloClient}>
        <div className="App">
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
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
