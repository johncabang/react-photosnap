import {
  Route,
  // BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";

import { React, useState } from "react";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NavbarMenu from "./components/NavbarMenu";

function App() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <NavbarMenu isOpen={isOpen} toggle={toggle} />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/stories" component={Stories} />
          <Route path="/features" component={Features} />
          <Route path="/pricing" component={Pricing} />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
