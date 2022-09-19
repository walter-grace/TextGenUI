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
import Generated from './Generated'

export default class Bio extends Component {

    state = {
        isActive:false
    }
    handleShow = () =>{
        this.setState({
            isActive: true
        })
    }

    handleHide = () => {
        this.setState({
            isActive: false
        })
    }

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
          <div
            sx={{
              border: "thin",
              borderColor: "blueDark",
              borderRadius: "sketchy0",
              background: theme => theme.colors.blue,
              height: 50
            }}
          />
          <S.table sx={{ pt: 20, width: 200, marginX: 18 }}>
            <thead>
              <S.tr>
                <S.th colSpan="12">writer's block be gone</S.th>
              </S.tr>
            </thead>
          </S.table>
          <S.table sx={{ pt: 20, width: 200, marginX: 25, marginY: 20 }}>
            <thead>
              <S.tr>
                <S.th colSpan="12"> powered by a generative adversarial network</S.th>
              </S.tr>
            </thead>
          </S.table>
          <Divider />
          <h5>Max length</h5>
          <h6>This determines how many characters of text</h6>
          <Slider defaultValue={25} />
          <h5>Temperature</h5>
          <h6> This will set the creativity of the generation</h6>
          <Slider defaultValue={50} />
          <h5>Number of text</h5>
          <h6>This will control number of prompts</h6>
          <Slider defaultValue={15} />

          <Divider />
          <Box
            as="form"
            pb={3}
            onSubmit={e => e.preventDefault()}
            sx={{ width: 200 }}
          >
            <Label htmlFor="username">Start off by writing a prompt, then hitting generate</Label>
            <Input name="username" mb={3} />
            <Button onClick={this.handleShow}>Generate</Button>
          </Box>
          {this.state.isActive && <div>
              <h4>
                  Here are your prompts
              </h4>
              <Generated />
              </div>}
        </Flex>
      </ThemeProvider>
    );
  }
}
