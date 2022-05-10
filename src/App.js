import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./home.css";
import PageDetail from "./pages/PageDetail";
import Infinite from "./service/Infinite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Infinite /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/pageDetail/:id">
            <PageDetail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
