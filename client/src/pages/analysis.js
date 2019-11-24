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
import Loader from "../components/loader";
import axios from "axios";
import { apiUrl } from "../constants";

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  getMostUsedWords() {
    axios.get(apiUrl + "/mostUsedWords").then(success => {
      console.log("success !");
      this.setState({ mostUsedWords: success.words, isReady: true });
    });
  }
  render() {
    if (!this.state.isReady) return <Loader />;
    return (
      <Container flexDirection="column" padding="30px">
        <BigTitle>Data Breakdown !</BigTitle>
        <Subtitle>Most used words: </Subtitle>
        {this.state.mostUsedWords}
      </Container>
    );
  }
}
export default Analysis;
