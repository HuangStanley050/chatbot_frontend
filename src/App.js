import React, { Component } from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import NavBar from "./components/navigation/Navigation";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
