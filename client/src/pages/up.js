import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  BigTitle,
  Container,
  Subtitle,
  Title,
  Button,
  Paragraph
} from "../components/styled-components";
import api from "../api.js";
import axios from "axios";

class Up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      selectedFile: null
    };
  }

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:8000/upload", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
        this.setState({ redirect: true });
      });
  };

  onChangeHandler = event => {
    console.log(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    return (
      <Container flexDirection="column" padding="30px">
        <Subtitle>
          Here you can upload the Facebook file with all your conversations in
          it
        </Subtitle>
        <Container>
          <input type="file" name="file" onChange={this.onChangeHandler} />
          <Button
            onClick={() => {
              this.onClickHandler();
            }}
          >
            Upload
          </Button>
        </Container>
      </Container>
    );
  }
}
export default Up;
