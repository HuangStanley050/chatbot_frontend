import React, { Component } from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import { v4 as uuid } from "uuid";

import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import NavBar from "./components/navigation/Navigation";
import ChatBot from "./components/chatbot/Chatbot";

const cookies = new Cookies();
class App extends Component {
  componentDidMount() {
    if (cookies.get("userID") === undefined) {
      cookies.set("userID", uuid(), { path: "/" });
    }
    //console.log(cookies.get("userID"));
  }
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
        <ChatBot />
      </div>
    );
  }
}

export default App;
