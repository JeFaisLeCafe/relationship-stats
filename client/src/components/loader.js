import React from "react";
import { Container } from "./styled-components";
class Loader extends React.Component {
  render() {
    return (
      <Container height="100vh">
        <div className="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    );
  }
}

export default Loader;
