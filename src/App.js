import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/navbar'
import Footer from "./components/footer"
import Home from './pages/home'


function App() {
  return (
    <Router>

      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        {/* <Route exact path={PORTFOLIO_URL} component={Portfolio} /> */}
        {/* <Route path="*">
                <Page404 />
              </Route> */}
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
