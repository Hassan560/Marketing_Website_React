import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from "./Components/Navbar/Pages/Services/Services";
import About from "./Components/Navbar/Pages/About/About";
import Contact from "./Components/Navbar/Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Navbar/Pages/Home/Home"
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Services" exact component={Services} />
          <Route path="/About" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
