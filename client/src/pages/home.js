import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  BigTitle,
  Container,
  Subtitle,
  Title,
  Button,
  Paragraph
} from "../components/styled-components";
import { FacebookProvider, LoginButton } from "react-facebook";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container flexDirection="column" padding="30px">
        <BigTitle>Welcome to the Relationship Stats Project !</BigTitle>
        <Subtitle>the best place to reflect on your relationships</Subtitle>
        <Title>Where you can have fun with the people you talk to</Title>
        <Paragraph>
          It's very simple: All you need is to drop here your facebook
          conversation archive
        </Paragraph>

        {/* Link to List.js */}
        <Link to={"./up"}>
          <Button>Upload</Button>
        </Link>

        <FacebookProvider appId="994194944265752">
          <LoginButton
            scope="email"
            onCompleted={this.handleResponse}
            onError={this.handleError}
          >
            <span>Login via Facebook</span>
          </LoginButton>
        </FacebookProvider>
      </Container>
    );
  }
}
export default Home;
