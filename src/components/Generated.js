/** @jsx jsx */
import "../styles.css";
import theme from "theme-ui-sketchy-preset";
import {
  jsx,
  ThemeProvider,
  Flex,
  Box,
  Button,
  Card,
  Text,
  Label,
  Input,
  Alert,
  Slider,
  Divider,
  Styled as S
} from "theme-ui";
import { Component } from "react";
 // Relative path to your File
import TextFileReader from "./TextReader";

const myTxt = require("./text.txt")
const myTxt1 = require("./text2.txt")
const myTxt3 = require("./text3.txt")

export default class Generated extends Component {
  constructor(props) {
    super(props);
    this.helloThere = this.helloThere.bind(this);
    this.Tweet = this.Tweet.bind(this);
  }

  helloThere() {
    alert('Please wait while text is being generated');
  }
  Tweet() {
      alert('Post this text to your tweet')
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex m={30} sx={{ flexDirection: "column" }}>
          <TextFileReader
            txt={myTxt}
          />
          <TextFileReader
            txt={myTxt1}
          />
          <TextFileReader
            txt={myTxt3}
          />
        </Flex>
      </ThemeProvider>
    );
  }
}
