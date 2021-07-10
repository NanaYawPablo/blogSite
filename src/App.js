import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/navbar'
import Footer from "./components/footer"
import Home from './pages/home'
import { ABOUT_URL } from './constants/urls'
import About from "./pages/about"
import Page404 from "./pages/page404"


function App() {
  return (
    <Router>

      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path={ABOUT_URL} component={About} />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
