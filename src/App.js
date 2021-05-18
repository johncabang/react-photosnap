import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stories" component={Stories} />
        <Route path="/features" component={Features} />
        <Route path="/pricing" component={Pricing} />
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
