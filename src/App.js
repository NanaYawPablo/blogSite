import React, { lazy, Suspense } from 'react'; 
//React Router import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//Apollo Client import
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

//page & layout imports
import Navbar from './components/navbar'
import Footer from "./components/footer"
import { ABOUT_URL, BLOGS_URL, BLOG_URL, CATEGORY_URL, GRAPHQL_SERVER_ENTRYPOINT } from './constants/urls'
import LoadingPage from './components/loadingPage';
import ErrorBoundary from './components/ErrorBoundary';
//  import Home from './pages/home'
// import About from "./pages/about"
// import Page404 from "./pages/page404"
// import BlogDetails from "./pages/BlogDetails"
// import Category from "./pages/Category"
// import Blogs from "./pages/Blogs"

const Home = lazy(() => import('./pages/home'))
const About = lazy(() => import('./pages/about'))
const Page404 = lazy(() => import('./pages/page404'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const Category = lazy(() => import('./pages/Category'))
const Blogs = lazy(() => import('./pages/Blogs'))


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
        <ErrorBoundary>

        <Suspense fallback={<LoadingPage/>}>
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
        </Suspense>
        <Footer />

        </ErrorBoundary>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
