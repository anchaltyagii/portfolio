import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const menu = () => {};
  return (
    <>
      <Header />
      <div className="App">
        <Router>
          <Navbar />
          <div className="right-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/skills" component={Skills} />

              {/* <Route path="*" component={NotFound} /> */}
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
