import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/stories" exact component={Stories} />
      <Route path="/features" exact component={Features} />
      <Route path="/pricing" exact component={Pricing} />
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
