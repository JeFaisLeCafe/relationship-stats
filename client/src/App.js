import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Upload from "./pages/upload";
import Up from "./pages/up";
import { MainContainer } from "./components/styled-components";

class App extends Component {
  render() {
    const App = () => (
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/upload" component={Upload} />
          <Route path="/up" component={Up} />
        </Switch>
      </MainContainer>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
