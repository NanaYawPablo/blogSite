import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/navbar'
import Footer from "./components/footer"
import Home from './pages/home'


function App() {
  return (
<Router>
          <div 
          // className="app"
          >
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
          </div>
        </Router>
  );
}

export default App;
