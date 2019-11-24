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
class Home extends Component {
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
      </Container>
    );
  }
}
export default Home;
